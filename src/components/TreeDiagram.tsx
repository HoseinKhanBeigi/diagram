'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

interface TreeNode {
  name: string;
  children?: TreeNode[];
  _children?: TreeNode[];
}

interface CollapsibleTreeProps {
  data: TreeNode;
  width?: number;
  height?: number;
  highlightDifferences?: boolean;
  zoom?: number;
  onZoomChange?: (zoom: number) => void;
  isTarget?: boolean;
  targetData?: TreeNode;
}

const CollapsibleTree = ({ 
  data, 
  width = 1200,
  height = 800,
  highlightDifferences = false,
  zoom = 1,
  onZoomChange,
  isTarget = false,
  targetData
}: CollapsibleTreeProps) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [treeData, setTreeData] = useState<TreeNode>(data);

  useEffect(() => {
    if (!svgRef.current || !treeData) return;

    // Clear previous content
    d3.select(svgRef.current).selectAll('*').remove();

    // Set up the dimensions with larger margins
    const margin = { top: 40, right: 40, bottom: 40, left: 100 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Create the root hierarchy
    const root = d3.hierarchy(treeData);
    
    // Compute the tree layout with increased spacing
    const dx = 25;
    const dy = innerWidth / (1 + root.height);
    
    const tree = d3.tree<TreeNode>()
      .nodeSize([dx, dy])
      .separation((a, b) => (a.parent === b.parent ? 2 : 4));

    // Create the SVG container with larger font
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', dx)
      .attr('viewBox', [-margin.left, -margin.top, width, dx].join(' '))
      .attr('style', 'max-width: 100%; height: auto; font: 16px sans-serif; user-select: none;');

    // Create groups for links and nodes
    const gLink = svg.append('g')
      .attr('fill', 'none')
      .attr('stroke', '#555')
      .attr('stroke-opacity', 0.4)
      .attr('stroke-width', 1.5);

    const gNode = svg.append('g')
      .attr('cursor', 'pointer')
      .attr('pointer-events', 'all');

    // Define the diagonal generator for links
    const diagonal = d3.linkHorizontal<d3.HierarchyLink<TreeNode>, d3.HierarchyPointNode<TreeNode>>()
      .x(d => d.y)
      .y(d => d.x);

    // Function to check if a node is different
    const isNodeDifferent = (node: d3.HierarchyNode<TreeNode>, targetNode: d3.HierarchyNode<TreeNode> | undefined): boolean => {
      if (!targetNode) return true;
      
      // Get the path to the current node
      const getPath = (node: d3.HierarchyNode<TreeNode>): string[] => {
        const path: string[] = [];
        let current: d3.HierarchyNode<TreeNode> | undefined = node;
        while (current && current.parent) {
          path.unshift(current.data.name);
          current = current.parent;
        }
        return path;
      };

      // Find the corresponding node in the target tree
      const findNodeByPath = (current: d3.HierarchyNode<TreeNode>, path: string[]): d3.HierarchyNode<TreeNode> | undefined => {
        if (path.length === 0) return current;
        const childName = path[0];
        const child = current.children?.find(c => c.data.name === childName);
        if (!child) return undefined;
        return findNodeByPath(child, path.slice(1));
      };

      const path = getPath(node);
      const correspondingNode = findNodeByPath(targetNode, path);
      
      // If no corresponding node found, it's different
      if (!correspondingNode) return true;
      
      // If names are different, it's different
      if (node.data.name !== correspondingNode.data.name) return true;
      
      // If number of children is different, it's different
      const currentChildren = node.children || [];
      const targetChildren = correspondingNode.children || [];
      if (currentChildren.length !== targetChildren.length) return true;
      
      // Check if all children names match
      const currentChildNames = new Set(currentChildren.map(c => c.data.name));
      const targetChildNames = new Set(targetChildren.map(c => c.data.name));
      
      if (currentChildNames.size !== targetChildNames.size) return true;
      
      for (const name of currentChildNames) {
        if (!targetChildNames.has(name)) return true;
      }
      
      return false;
    };

    // Function to update the tree layout
    function update(event: any, source: d3.HierarchyPointNode<TreeNode>) {
      const duration = event?.altKey ? 2500 : 250;
      const nodes = root.descendants().reverse();
      const links = root.links();

      // Compute the new tree layout
      tree(root);

      // Find the leftmost and rightmost nodes
      let left = root;
      let right = root;
      root.eachBefore(node => {
        if (node.x! < left.x!) left = node;
        if (node.x! > right.x!) right = node;
      });

      const treeHeight = right.x! - left.x! + margin.top + margin.bottom;

      // Update the SVG dimensions
      svg.transition()
        .duration(duration)
        .attr('height', treeHeight)
        .attr('viewBox', [-margin.left, left.x! - margin.top, width, treeHeight].join(' '));

      // Update the nodes
      const node = gNode.selectAll<SVGGElement, d3.HierarchyPointNode<TreeNode>>('g')
        .data(nodes, d => d.data.name);

      // Enter new nodes
      const nodeEnter = node.enter().append('g')
        .attr('transform', d => `translate(${source.y0},${source.x0})`)
        .attr('fill-opacity', 0)
        .attr('stroke-opacity', 0)
        .on('click', (event, d) => {
          d.children = d.children ? null : d._children;
          update(event, d);
        });

      nodeEnter.append('circle')
        .attr('r', 5)
        .attr('fill', d => {
          if (highlightDifferences && targetData) {
            const targetRoot = d3.hierarchy(targetData);
            if (isNodeDifferent(d, targetRoot)) {
              return '#ff0000';
            }
          }
          return d._children ? '#555' : '#999';
        })
        .attr('stroke-width', 15);

      nodeEnter.append('text')
        .attr('dy', '0.31em')
        .attr('x', d => d._children ? -12 : 12)
        .attr('text-anchor', d => d._children ? 'end' : 'start')
        .text(d => d.data.name)
        .attr('stroke-linejoin', 'round')
        .attr('stroke-width', 4)
        .attr('stroke', 'white')
        .attr('paint-order', 'stroke')
        .style('font-size', '16px')
        .style('fill', d => {
          if (highlightDifferences && targetData) {
            const targetRoot = d3.hierarchy(targetData);
            if (isNodeDifferent(d, targetRoot)) {
              return '#ff0000';
            }
          }
          return 'currentColor';
        });

      // Transition nodes to their new position
      node.merge(nodeEnter).transition()
        .duration(duration)
        .attr('transform', d => `translate(${d.y},${d.x})`)
        .attr('fill-opacity', 1)
        .attr('stroke-opacity', 1);

      // Transition exiting nodes
      node.exit().transition()
        .duration(duration)
        .attr('transform', d => `translate(${source.y},${source.x})`)
        .attr('fill-opacity', 0)
        .attr('stroke-opacity', 0)
        .remove();

      // Update the links
      const link = gLink.selectAll<SVGPathElement, d3.HierarchyLink<TreeNode>>('path')
        .data(links, d => d.target.data.name);

      // Enter new links
      const linkEnter = link.enter().append('path')
        .attr('d', d => {
          const o = {x: source.x0!, y: source.y0!};
          return diagonal({source: o, target: o} as any);
        });

      // Transition links to their new position
      link.merge(linkEnter).transition()
        .duration(duration)
        .attr('d', diagonal as any);

      // Transition exiting links
      link.exit().transition()
        .duration(duration)
        .attr('d', d => {
          const o = {x: source.x!, y: source.y!};
          return diagonal({source: o, target: o} as any);
        })
        .remove();

      // Store the old positions for transition
      root.eachBefore(d => {
        d.x0 = d.x;
        d.y0 = d.y;
      });
    }

    // Initialize the tree
    root.x0 = dy / 2;
    root.y0 = 0;
    root.descendants().forEach(d => {
      d._children = d.children;
      if (d.depth && d.data.name.length !== 7) d.children = null;
    });

    update(null, root);
  }, [treeData, width, height, highlightDifferences, targetData]);

  return (
    <div className="w-full overflow-auto border border-gray-200 rounded-lg p-4">
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default CollapsibleTree; 