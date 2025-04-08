'use client';

import { useState } from 'react';
import TreeComparator from "../components/TreeComparator.jsx";
import React from 'react';

const currentData = {
  name: "crm",
  children: [
    {
      name: "دسترسی ها",
      children: [
        {
          name: "مدیریت قالب",
          children: [
            { name: "فعال/غیرفعال/حذف یک قالب" },
            { name: "مشاهده همه" },
            { name: "جستجوی قالب براساس نوع و سکشن" },
          ],
        },
        {
          name: "مدیریت سرنخ",
          children: [
            { name: "تغییر وضعیت" },
            { name: "ارتباط سرنخ" },
            { name: "جستجوی سرنخ" },
            { name: "وضعیت بارگذاری سرنخ" },
          ],
        },
        {
          name: "داشبورد",
          children: [
            { name: "دریافت اطلاعات کارت ها" },
            { name: "دریافت اطلاعات کارت ها براساس نوع محصول	" },
          ],
        },
        {
          name: "سرنخ حقیقی",
          children: [
            { name: "ارسال پیام" },
            { name: "ارسال ایمیل" },
            { name: "اختصاص دادن" },
            { name: "رفع مسئولیت" },
            { name: "برچسب زدن" },
            { name: "حذف برچسب	" },
            { name: "تغییر وضعیت" },
            { name: "بارگذاری EXCEL" },
            { name: "جستجو" },
            { name: "خروجی اطلاعات	" },
          ],
        },
        {
          name: "سرنخ حقوقی",
          children: [
            { name: "ارسال پیام" },
            { name: "ارسال ایمیل" },
            { name: "اختصاص دادن" },
            { name: "رفع مسئولیت" },
            { name: "برچسب زدن" },
            { name: "حذف برچسب	" },
            { name: "تغییر وضعیت" },
            { name: "بارگذاری EXCEL" },
            { name: "جستجو" },
            { name: "خروجی اطلاعات	" },
          ],
        },
        {
          name: "مدیریت فرصت	",
          children: [
            { name: "زمان بندی احراز هویت" },
            { name: "ویرایش اطلاعات" },
            { name: "پایپلاین" },
            { name: "مشاهده پایپلاین پروداکت ها" },
            { name: "مشاهده همه" },
            { name: "دسترسی به تمامی عملیات های فرصت ها" },
            { name: "مشاهده همه زمانبندی های احراز هویت" },
            { name: "مشاهده بررسی اطلاعات" },
            { name: "ایجاد ملاقات" },
            { name: "فعالسازی اعتبار سایا" },
            { name: "استعلام وضعیت سجام یک فرصت" },
            { name: "مشاهده انواع قراردادهای سایا" },
            { name: "ثبت احراز هویت" },
            { name: "ویرایش شماره حساب با جایگزین شدن مقدار جدید استعلام شبا" },
            { name: "ارسال گروهی پیامک" },
            { name: "ثبت نشانی کاربر" },
            { name: "ایجاد اعتبار سایا" },
            { name: "ارسال رمز یکبار مصرف سجام به دارنده یک فرصت" },
            { name: "تکمیل اطلاعات قرارداد یک فرصت سایا" },
            { name: "لغو ملاقات" },
            { name: "ثبت نشانی ملاقات" },
            { name: "اجرای فرمان" },
            { name: "دریافت اطلاعات کد بورسی از سامانه سجام" },
            { name: "ثبت اطلاعات تکمیلی" },
            { name: "مشاهده زمانبندی های احراز هویت قابل دسترس" },
            { name: "خروجی اکسل فرصت ها" },
            { name: "انجام فرمان COMPLETE TRADING INFO" },
            { name: "خروجی اکسل ملاقات های پیش رو" },
            { name: "دریافت کد و شماره تلفن سجامی یک فرصت" },
            { name: "ایجاد ملاقات" },
            { name: "تائید پروداکت بیزینس" },
            { name: "مشاهده فرصت های یک محصول" },
            { name: "مشاهده ملاقات های یک فرصت" },
            { name: "دریافت توکن سند فرصت" },
            { name: "جستجوی فرصت ها" },
            { name: "ثبت کارا سجام" },
            { name: "مشاهده دلایل حذف فرصت" },
            { name: "مشاهده جدول زمانبندی احراز هویت" },
            { name: "اجرای فرمان تائید کارگزاری" },
            { name: "تغییر وضعیت ملاقات به تائید شده" },
            { name: "اجرای فرمان need sejam code" },
            { name: "مشاهده ملاقات" },
            { name: "لغو فرمان VERIFY_SEJAM_CODE" },
            { name: "لغو فرصت" },
            { name: "تغییر وضعیت ملاقات به انجام شده" },
            { name: "رد اطلاعات تکمیلی" },
            { name: "تائید بررسی اطلاعات بیزینسی" },
            { name: "ویرایش زمانبندی احراز هویت" },
            { name: "مشاهده اطلاعات تماس فرصت" },
            { name: "بازگشت به عقب (backward)" },
            { name: "مشاهده بررسی اطلاعات" },
            { name: "ساخت صندوق" },
            { name: "ثبت بررسی اطلاعات" },
            { name: "تائید پروداکت" },
            { name: "رد همه اطلاعات" },
            { name: "جرکت به جلو (forward)" },
            { name: "دریافت کد و شماره تلفن سجامی یک فرصت" },
            { name: "لیست افراد" },
          ],
        },
        {
          name: "مرکز اطلاع رسانی",
          children: [{ name: "مشاهده همه" }],
        },
        {
          name: "فرصت فروش",
          children: [{ name: "مشاهده همه" }],
        },
        {
          name: "تسک",
          children: [
            { name: "مشاهده همه	" },
            { name: "مشاهده تسک های یک سرنخ	" },
            { name: "تغییر وضعیت تسک به باز" },
          ],
        },
        {
          name: "مدیریت افراد	",
          children: [
            { name: "ثبت اطلاعات تکمیلی بیزینسی" },
            { name: "ثبت اطلاعات تکمیلی بیزینسی EN" },
            { name: "دریافت اطلاعات تماس" },
            { name: "ثبت اطلاعات تکمیلی ترمینال شاپرک" },
            { name: "ثبت فعالیت برای فرد" },
            { name: "دریافت فایل اکسل درخواست ترمینال از سپ" },
            { name: "بارگذاری پاسخهای شاپرک" },
            { name: "جستجوی پارتی" },
            { name: "دریافت اطلاعات هویتی پارتی" },
            { name: "مشاهده اطلاعات تماس" },
            { name: "مشاهده کتگوری های پارتی" },
            { name: "مشاهده TERMINAL INFO" },
            { name: "تولید QR Code" },
            { name: "چاپ QR Code" },
            { name: "مشاهده اطلاعات یک پارتی" },
          ],
        },
        {
          name: "افراد",
          children: [{ name: "جستجوی افراد" }, { name: "دریافت فایل اکسل" }],
        },
        {
          name: "شرکت ها",
          children: [{ name: "جستجوی شرکت ها" }, { name: "دریافت فایل اکسل" }],
        },
        {
          name: "احراز هویت",
          children: [
            { name: "دانلود" },
            { name: "رد" },
            { name: "تائید" },
            { name: "جستجوی سجام کی وای سی" },
            { name: "جستجوی کیان کی وای سی" },
          ],
        },
        {
          name: "مدیریت تگ",
          children: [
            { name: "برچسب زدن" },
            { name: "مشاهده همه" },
            { name: "استفاده های یک برچسب" },
            { name: "برداشتن برچسب" },
            { name: "مشاهده تگ با کلاس و شناسه کلاس" },
          ],
        },
        {
          name: "تماس",
          children: [
            { name: "جستجوی تماس ها" },
            { name: "برقراری تماس" },
            { name: "ثبت لاگ پایش تماس" },
            { name: "غیرفعالسازی سیستم پایش تماس" },
            { name: "اتمام تماس" },
            { name: "اطلاعات پایه تماس" },
            { name: "مشاهده جزئیات تماس" },
            { name: "مشاهده وضعیت سیستم پایش تماس" },
            { name: "فعالسازی سیستم پایش تماس" },
          ],
        },
        {
          name: "جلسات",
          children: [
            { name: "فایلها" },
            { name: "دانلود فایل" },
            { name: "مشاهده همه نظرات" },
            { name: "مشاهده همه" },
          ],
        },
        {
          name: "مدیریت درخواست	",
          children: [
            { name: "افزودن کد درخواست" },
            { name: "مشاهده همه کد درخواست ها" },
            { name: "ویرایش کد درخواست" },
          ],
        },
        {
          name: "درخواست ها	",
          children: [
            { name: "مشاهده همه" },
            { name: "مشاهده گفتگوهای درخواست" },
            { name: "مشاهده درخواستهای یک اپراتور" },
            { name: "اختصاص دادن به فرد" },
            { name: "افزودن پیام" },
            { name: "فعالسازی" },
          ],
        },
        {
          name: "گزارش ها	",
          children: [
            { name: "لیست جداول قابل گزارش گیری" },
            { name: "گزارش تفصیلی فعالیت های کاربران" },
            { name: "لیست ستونهای یک جدول قابل گزارش گیری" },
          ],
        },
        {
          name: "بیزینس ها	",
          children: [
            { name: "ثبت" },
            { name: "جستجو با کد" },
            { name: "جستجو" },
          ],
        },
        {
          name: "مدیریت پنل	",
          children: [
            { name: "مدیریت سطوح احراز هویت" },
            { name: "فعال/غیرفعالسازی" },
            { name: "مدیریت پیامک های مراحل محصول" },
          ],
        },
        {
          name: "مدیریت کار ها	",
          children: [{ name: "جستجو" }, { name: "تغییر وضعیت	" }],
        },
        {
          name: "دسترسی ها	",
          children: [{ name: "مشاهده همه	" }, { name: "لیست نقشها	" }],
        },
        {
          name: "کارمندان",
          children: [
            { name: "فعالسازی در واحد" },
            { name: "غیر فعالسازی در واحد" },
            { name: "فعالسازی در کل واحدها" },
            { name: "غیر فعالسازی در کل واحدها" },
            { name: "ویرایش نقش" },
            { name: "EMPLOYEE_FIND_BY_USER_IDS" },
            { name: "EMPLOYEE_SUSPEND" },
            { name: "EMPLOYEE_OFFWORK" },
            { name: "EMPLOYEE_GET_ON_DUTIES" },
            { name: "غیرفعالسازی" },
            { name: "حذف تخصیص واحد" },
            { name: "تخصیص واحد" },
            { name: "EMPLOYEE_ACTIVATE" },
            { name: "makeEmployeeOnDuty" },
            { name: "جستجو با کلید" },
            { name: "ویرایش تصویر پروفایل" },
            { name: "ثبت" },
            { name: "مشاهده همه" },
          ],
        },
        { name: "ارتباطات افراد	", children: [{ name: "مشاهده همه	" }] },
        {
          name: "شعبه ها	",
          children: [
            { name: "ثبت" },
            { name: "تغییر وضعیت" },
            { name: "جستجو با کد" },
            { name: "جستجو" },
          ],
        },
        {
          name: "مدیریت عملیات",
          children: [{ name: "مشاهده همه	 " }],
        },
        {
          name: "مدیریت توزیع",
          children: [{ name: "مشاهده همه و اعضاء" }],
        },
        {
          name: "تنظیمات عملیات	",
          children: [],
        },
        {
          name: "نمایندگی ها",
          children: [
            { name: "ثبت" },
            { name: "تغییر وضعیت" },
            { name: "جستجو با کد" },
            { name: "جستجو" },
          ],
        },
        {
          name: "کارگزارها",
          children: [{ name: "جستجو با کد	 " }, { name: "تغییر وضعیت	" }],
        },
        {
          name: "ابزارها",
          children: [
            { name: "ocr کارت ملی" },
            { name: "ocr کارت اعتباری" },
            { name: "اعتبار سنجی پارامتری لیزینگ" },
            { name: "اعتبار سنجی حقیقی سامان" },
            { name: "اعتبار سنجی حقوقی سامان" },
            { name: "به روز رسانی اطلاعات کاربر از سجام" },
            { name: "دریافت امضای کاربر از سجام" },
            { name: "استعلام کدپستی 2" },
            { name: "استعلام وضعیت سجام" },
            { name: "استعلام کدپستی شرکت" },
            { name: "استعلام شبا" },
            { name: "استعلام ثبت احوال با تصویر" },
            { name: "استعلام کدپستی 1" },
            { name: "استعلام ثبت احوال بدون تصویر" },
            { name: "استعلام شاهکار" },
            { name: "استعلام شماره شبا با شماره کارت" },
            { name: "تغییر وضعیت کاربر" },
            { name: "استعلام وضعیت کاربر" },
            { name: "استعلام اطلاعات شرکت" },
            { name: "استعلام اطلاعات صاحبان امضاء" },
          ],
        },
        {
          name: "مدیریت محصولات فروش",
          children: [{ name: "مشاهده همه	 " }],
        },
        {
          name: "دسترسی ها (Action)",
          children: [{ name: "تغییر عنوان و نوع	" }, { name: "مشاهده همه	 " }],
        },
        {
          name: "مدیریت کاربران	",
          children: [],
        },
        {
          name: "مدیریت قالبهای سیستمی",
          children: [
            { name: "فعال/غیرفعال/حذف یک قالب سیستمی" },
            { name: "جستجو قالب سیستمی" },
            { name: "جستجوی قالب های سیستمی براساس سکشن" },
          ],
        },
        {
          name: "دسترسی های مستثنی شده	",
          children: [{ name: "ایجاد دسته ای دسترسی های مستثنی شده کاربر	" }],
        },
        {
          name: "اسناد",
          children: [
            { name: "مشاهده نوع سند یک فرد" },
            { name: "مشاهده نوع اسناد یک فرد" },
            { name: "پرینت فعالیت ها" },
            { name: "دریافت اسناد یک فرد همرا با توکن" },
            { name: "مشاهد سند یک لوانت" },
            { name: "ایجاد سند برای لوانت" },
          ],
        },
        {
          name: "مدیریت دسترسی پایپ لاینها	",
          children: [
            { name: "لغو دسترسی	" },
            { name: "لیست محصول-پایپلاین های کاربر " },
            { name: "تغییر دسترسی به محصول-پایپلاین برای کاربر	" },
            { name: "اعطا دسترسی	" },
            { name: "حذف همه	" },
          ],
        },
        {
          name: "مدیریت ادمین تماس	",
          children: [
            { name: "نگاشت شماره داخلی به اپراتور	" },
            { name: "مشاهده همه	 " },
          ],
        },
        {
          name: "دسترسی های شامل شده",
          children: [{ name: "ایجاد دسته ای دسترسی های شامل شده کاربر" }],
        },
        {
          name: "سرویسهای اطلاع رسانی	",
          children: [
            { name: "ارسال ایمیل گروهی	" },
            { name: "ارسال ایمیل	" },
            { name: "ارسال پیامک	" },
            { name: "ارسال پیام واتس اپ	" },
          ],
        },
        {
          name: "پروفایل",
          children: [
            { name: "مشاهده فرصت ها با شناسه levant" },
            { name: "اطلاعات پرتفو" },
            { name: "بررسی وجود ایمیل برای یک فرد" },
            { name: "مشاهده روابط یک فرد" },
          ],
        },
        {
          name: "بیزینس ها",
          children: [{ name: "مشاهده همه	" }],
        },
        {
          name: "مدیرت فرمها",
          children: [
            { name: "مقادیر فیلدهای سرنخ" },
            { name: "فیلدهای سرنخ" },
            { name: "مشاهده تمام ستونها" },
            { name: "ویرایش ترتیب ستون" },
            { name: "خروجی اطلاعات" },
            { name: "مشاهده اطلاعات ستونها یک سرنخ" },
          ],
        },
        {
          name: "تاریخچه فعالیت ها	",
          children: [
            { name: "لیست نوع فعالیت ها" },
            { name: "جستجوی فعالیت ها با جزئیات" },
            { name: "جستجوی فعالیت ها بر اساس نوع عمل" },
            { name: "جستجوی فعالیت ها" },
            { name: "مشاهده تایم لاین یک فرد" },
          ],
        },
        {
          name: "فرمها",
          children: [
            { name: "دریافت فرم فرصت" },
            { name: "دریافت فرم های فرد" },
            { name: "امضای فرم فرصت" },
          ],
        },
        {
          name: "محصولات",
          children: [
            { name: "لیست گروه محصولات سازمان" },
            { name: "لیست محصولات یک سازمان" },
            { name: "مشاهده پایپلاین یک محصول" },
            { name: "مشاهده لیست محصولات" },
            { name: "لیست اکشن های پایپلاین با کدمحصول/شناسه پایپلاین" },
          ],
        },
      ],
    },
  ],
};

const targetData = {
  name: "crm",
  children: [
    {
      name: "دسترسی ها",
      children: [
        {
          name: "داشبورد",
          children: [
            { name: "دریافت اطلاعات کارت ها" },
            { name: "دریافت اطلاعات کارت ها براساس نوع محصول	" },
          ],
        },
        {
          name: "سرنخ حقیقی",
          children: [
            { name: "ارسال پیام" },
            { name: "ارسال ایمیل" },
            { name: "اختصاص دادن" },
            { name: "رفع مسئولیت" },
            { name: "برچسب زدن" },
            { name: "حذف برچسب	" },
            { name: "تغییر وضعیت" },
            { name: "بارگذاری EXCEL" },
            { name: "جستجو" },
            { name: "خروجی اطلاعات	" },
          ],
        },
        {
          name: "سرنخ حقوقی",
          children: [
            { name: "ارسال پیام" },
            { name: "ارسال ایمیل" },
            { name: "اختصاص دادن" },
            { name: "رفع مسئولیت" },
            { name: "برچسب زدن" },
            { name: "حذف برچسب	" },
            { name: "تغییر وضعیت" },
            { name: "بارگذاری EXCEL" },
            { name: "جستجو" },
            { name: "خروجی اطلاعات	" },
          ],
        },
        {
          name: "مدیریت فرصت	",
          children: [
            { name: "زمان بندی احراز هویت" },
            { name: "ویرایش اطلاعات" },
            { name: "پایپلاین" },
            { name: "مشاهده پایپلاین پروداکت ها" },
            { name: "مشاهده همه" },
            { name: "دسترسی به تمامی عملیات های فرصت ها" },
            { name: "مشاهده همه زمانبندی های احراز هویت" },
            { name: "مشاهده بررسی اطلاعات" },
            { name: "ایجاد ملاقات" },
            { name: "فعالسازی اعتبار سایا" },
            { name: "استعلام وضعیت سجام یک فرصت" },
            { name: "مشاهده انواع قراردادهای سایا" },
            { name: "ثبت احراز هویت" },
            { name: "ویرایش شماره حساب با جایگزین شدن مقدار جدید استعلام شبا" },
            { name: "ارسال گروهی پیامک" },
            { name: "ثبت نشانی کاربر" },
            { name: "ایجاد اعتبار سایا" },
            { name: "ارسال رمز یکبار مصرف سجام به دارنده یک فرصت" },
            { name: "تکمیل اطلاعات قرارداد یک فرصت سایا" },
            { name: "لغو ملاقات" },
            { name: "ثبت نشانی ملاقات" },
            { name: "اجرای فرمان" },
            { name: "دریافت اطلاعات کد بورسی از سامانه سجام" },
            { name: "ثبت اطلاعات تکمیلی" },
            { name: "مشاهده زمانبندی های احراز هویت قابل دسترس" },
            { name: "خروجی اکسل فرصت ها" },
            { name: "انجام فرمان COMPLETE TRADING INFO" },
            { name: "خروجی اکسل ملاقات های پیش رو" },
            { name: "دریافت کد و شماره تلفن سجامی یک فرصت" },
            { name: "ایجاد ملاقات" },
            { name: "تائید پروداکت بیزینس" },
            { name: "مشاهده فرصت های یک محصول" },
            { name: "مشاهده ملاقات های یک فرصت" },
            { name: "دریافت توکن سند فرصت" },
            { name: "جستجوی فرصت ها" },
            { name: "ثبت کارا سجام" },
            { name: "مشاهده دلایل حذف فرصت" },
            { name: "مشاهده جدول زمانبندی احراز هویت" },
            { name: "اجرای فرمان تائید کارگزاری" },
            { name: "تغییر وضعیت ملاقات به تائید شده" },
            { name: "اجرای فرمان need sejam code" },
            { name: "مشاهده ملاقات" },
            { name: "لغو فرمان VERIFY_SEJAM_CODE" },
            { name: "لغو فرصت" },
            { name: "تغییر وضعیت ملاقات به انجام شده" },
            { name: "رد اطلاعات تکمیلی" },
            { name: "تائید بررسی اطلاعات بیزینسی" },
            { name: "ویرایش زمانبندی احراز هویت" },
            { name: "مشاهده اطلاعات تماس فرصت" },
            { name: "بازگشت به عقب (backward)" },
            { name: "مشاهده بررسی اطلاعات" },
            { name: "ساخت صندوق" },
            { name: "ثبت بررسی اطلاعات" },
            { name: "تائید پروداکت" },
            { name: "رد همه اطلاعات" },
            { name: "جرکت به جلو (forward)" },
            { name: "دریافت کد و شماره تلفن سجامی یک فرصت" },
            { name: "لیست افراد" },
          ],
        },
        {
          name: "مرکز اطلاع رسانی",
          children: [{ name: "مشاهده همه" }],
        },
        {
          name: "فرصت فروش",
          children: [{ name: "مشاهده همه" }],
        },
        {
          name: "تسک",
          children: [
            { name: "مشاهده همه	" },
            { name: "مشاهده تسک های یک سرنخ	" },
            { name: "تغییر وضعیت تسک به باز" },
          ],
        },
        {
          name: "مدیریت افراد	",
          children: [
            { name: "ثبت اطلاعات تکمیلی بیزینسی" },
            { name: "ثبت اطلاعات تکمیلی بیزینسی EN" },
            { name: "دریافت اطلاعات تماس" },
            { name: "ثبت اطلاعات تکمیلی ترمینال شاپرک" },
            { name: "ثبت فعالیت برای فرد" },
            { name: "دریافت فایل اکسل درخواست ترمینال از سپ" },
            { name: "بارگذاری پاسخهای شاپرک" },
            { name: "جستجوی پارتی" },
            { name: "دریافت اطلاعات هویتی پارتی" },
            { name: "مشاهده اطلاعات تماس" },
            { name: "مشاهده کتگوری های پارتی" },
            { name: "مشاهده TERMINAL INFO" },
            { name: "تولید QR Code" },
            { name: "چاپ QR Code" },
            { name: "مشاهده اطلاعات یک پارتی" },
          ],
        },
        {
          name: "افراد",
          children: [{ name: "جستجوی افراد" }, { name: "دریافت فایل اکسل" }],
        },
        {
          name: "شرکت ها",
          children: [{ name: "جستجوی شرکت ها" }, { name: "دریافت فایل اکسل" }],
        },
        {
          name: "احراز هویت",
          children: [
            { name: "دانلود" },
            { name: "رد" },
            { name: "تائید" },
            { name: "جستجوی سجام کی وای سی" },
            { name: "جستجوی کیان کی وای سی" },
          ],
        },
        {
          name: "مدیریت تگ",
          children: [
            { name: "برچسب زدن" },
            { name: "مشاهده همه" },
            { name: "استفاده های یک برچسب" },
            { name: "برداشتن برچسب" },
            { name: "مشاهده تگ با کلاس و شناسه کلاس" },
          ],
        },
        {
          name: "تماس",
          children: [
            { name: "جستجوی تماس ها" },
            { name: "برقراری تماس" },
            { name: "ثبت لاگ پایش تماس" },
            { name: "غیرفعالسازی سیستم پایش تماس" },
            { name: "اتمام تماس" },
            { name: "اطلاعات پایه تماس" },
            { name: "مشاهده جزئیات تماس" },
            { name: "مشاهده وضعیت سیستم پایش تماس" },
            { name: "فعالسازی سیستم پایش تماس" },
          ],
        },
        {
          name: "جلسات",
          children: [
            { name: "فایلها" },
            { name: "دانلود فایل" },
            { name: "مشاهده همه نظرات" },
            { name: "مشاهده همه" },
          ],
        },
        {
          name: "مدیریت درخواست	",
          children: [
            { name: "افزودن کد درخواست" },
            { name: "مشاهده همه کد درخواست ها" },
            { name: "ویرایش کد درخواست" },
          ],
        },
        {
          name: "درخواست ها	",
          children: [
            { name: "مشاهده همه" },
            { name: "مشاهده گفتگوهای درخواست" },
            { name: "مشاهده درخواستهای یک اپراتور" },
            { name: "اختصاص دادن به فرد" },
            { name: "افزودن پیام" },
            { name: "فعالسازی" },
          ],
        },
        {
          name: "گزارش ها	",
          children: [
            { name: "لیست جداول قابل گزارش گیری" },
            { name: "گزارش تفصیلی فعالیت های کاربران" },
            { name: "لیست ستونهای یک جدول قابل گزارش گیری" },
          ],
        },
        {
          name: "بیزینس ها	",
          children: [
            { name: "ثبت" },
            { name: "جستجو با کد" },
            { name: "جستجو" },
          ],
        },
        {
          name: "مدیریت پنل	",
          children: [
            { name: "مدیریت سطوح احراز هویت" },
            { name: "فعال/غیرفعالسازی" },
            { name: "مدیریت پیامک های مراحل محصول" },
          ],
        },
        {
          name: "مدیریت کار ها	",
          children: [{ name: "جستجو" }, { name: "تغییر وضعیت	" }],
        },
        {
          name: "دسترسی ها	",
          children: [{ name: "مشاهده همه	" }, { name: "لیست نقشها	" }],
        },
        {
          name: "کارمندان",
          children: [
            { name: "فعالسازی در واحد" },
            { name: "غیر فعالسازی در واحد" },
            { name: "فعالسازی در کل واحدها" },
            { name: "غیر فعالسازی در کل واحدها" },
            { name: "ویرایش نقش" },
            { name: "EMPLOYEE_FIND_BY_USER_IDS" },
            { name: "EMPLOYEE_SUSPEND" },
            { name: "EMPLOYEE_OFFWORK" },
            { name: "EMPLOYEE_GET_ON_DUTIES" },
            { name: "غیرفعالسازی" },
            { name: "حذف تخصیص واحد" },
            { name: "تخصیص واحد" },
            { name: "EMPLOYEE_ACTIVATE" },
            { name: "makeEmployeeOnDuty" },
            { name: "جستجو با کلید" },
            { name: "ویرایش تصویر پروفایل" },
            { name: "ثبت" },
            { name: "مشاهده همه" },
          ],
        },
        { name: "ارتباطات افراد	", children: [{ name: "مشاهده همه	" }] },
        {
          name: "شعبه ها	",
          children: [
            { name: "ثبت" },
            { name: "تغییر وضعیت" },
            { name: "جستجو با کد" },
            { name: "جستجو" },
          ],
        },
        {
          name: "مدیریت عملیات",
          children: [{ name: "مشاهده همه	 " }],
        },
        {
          name: "مدیریت توزیع",
          children: [{ name: "مشاهده همه و اعضاء" }],
        },
        {
          name: "تنظیمات عملیات	",
          children: [],
        },
        {
          name: "نمایندگی ها",
          children: [
            { name: "ثبت" },
            { name: "تغییر وضعیت" },
            { name: "جستجو با کد" },
            { name: "جستجو" },
          ],
        },
        {
          name: "کارگزارها",
          children: [{ name: "جستجو با کد	 " }, { name: "تغییر وضعیت	" }],
        },
        {
          name: "ابزارها",
          children: [
            { name: "ocr کارت ملی" },
            { name: "ocr کارت اعتباری" },
            { name: "اعتبار سنجی پارامتری لیزینگ" },
            { name: "اعتبار سنجی حقیقی سامان" },
            { name: "اعتبار سنجی حقوقی سامان" },
            { name: "به روز رسانی اطلاعات کاربر از سجام" },
            { name: "دریافت امضای کاربر از سجام" },
            { name: "استعلام کدپستی 2" },
            { name: "استعلام وضعیت سجام" },
            { name: "استعلام کدپستی شرکت" },
            { name: "استعلام شبا" },
            { name: "استعلام ثبت احوال با تصویر" },
            { name: "استعلام کدپستی 1" },
            { name: "استعلام ثبت احوال بدون تصویر" },
            { name: "استعلام شاهکار" },
            { name: "استعلام شماره شبا با شماره کارت" },
            { name: "تغییر وضعیت کاربر" },
            { name: "استعلام وضعیت کاربر" },
            { name: "استعلام اطلاعات شرکت" },
            { name: "استعلام اطلاعات صاحبان امضاء" },
          ],
        },
        {
          name: "مدیریت محصولات فروش",
          children: [{ name: "مشاهده همه	 " }],
        },
        {
          name: "دسترسی ها (Action)",
          children: [{ name: "تغییر عنوان و نوع	" }, { name: "مشاهده همه	 " }],
        },
        {
          name: "مدیریت کاربران	",
          children: [],
        },
        {
          name: "مدیریت قالبهای سیستمی",
          children: [
            { name: "فعال/غیرفعال/حذف یک قالب سیستمی" },
            { name: "جستجو قالب سیستمی" },
            { name: "جستجوی قالب های سیستمی براساس سکشن" },
          ],
        },
        {
          name: "دسترسی های مستثنی شده	",
          children: [{ name: "ایجاد دسته ای دسترسی های مستثنی شده کاربر	" }],
        },
        {
          name: "اسناد",
          children: [
            { name: "مشاهده نوع سند یک فرد" },
            { name: "مشاهده نوع اسناد یک فرد" },
            { name: "پرینت فعالیت ها" },
            { name: "دریافت اسناد یک فرد همرا با توکن" },
            { name: "مشاهد سند یک لوانت" },
            { name: "ایجاد سند برای لوانت" },
          ],
        },
        {
          name: "مدیریت دسترسی پایپ لاینها	",
          children: [
            { name: "لغو دسترسی	" },
            { name: "لیست محصول-پایپلاین های کاربر " },
            { name: "تغییر دسترسی به محصول-پایپلاین برای کاربر	" },
            { name: "اعطا دسترسی	" },
            { name: "حذف همه	" },
          ],
        },
        {
          name: "مدیریت ادمین تماس	",
          children: [
            { name: "نگاشت شماره داخلی به اپراتور	" },
            { name: "مشاهده همه	 " },
          ],
        },
        {
          name: "دسترسی های شامل شده",
          children: [{ name: "ایجاد دسته ای دسترسی های شامل شده کاربر" }],
        },
        {
          name: "سرویسهای اطلاع رسانی	",
          children: [
            { name: "ارسال ایمیل گروهی	" },
            { name: "ارسال ایمیل	" },
            { name: "ارسال پیامک	" },
            { name: "ارسال پیام واتس اپ	" },
          ],
        },
        {
          name: "پروفایل",
          children: [
            { name: "مشاهده فرصت ها با شناسه levant" },
            { name: "اطلاعات پرتفو" },
            { name: "بررسی وجود ایمیل برای یک فرد" },
            { name: "مشاهده روابط یک فرد" },
          ],
        },
        {
          name: "بیزینس ها",
          children: [{ name: "مشاهده همه	" }],
        },
        {
          name: "مدیرت فرمها",
          children: [
            { name: "مقادیر فیلدهای سرنخ" },
            { name: "فیلدهای سرنخ" },
            { name: "مشاهده تمام ستونها" },
            { name: "ویرایش ترتیب ستون" },
            { name: "خروجی اطلاعات" },
            { name: "مشاهده اطلاعات ستونها یک سرنخ" },
          ],
        },
        {
          name: "تاریخچه فعالیت ها	",
          children: [
            { name: "لیست نوع فعالیت ها" },
            { name: "جستجوی فعالیت ها با جزئیات" },
            { name: "جستجوی فعالیت ها بر اساس نوع عمل" },
            { name: "جستجوی فعالیت ها" },
            { name: "مشاهده تایم لاین یک فرد" },
          ],
        },
        {
          name: "فرمها",
          children: [
            { name: "دریافت فرم فرصت" },
            { name: "دریافت فرم های فرد" },
            { name: "امضای فرم فرصت" },
          ],
        },
        {
          name: "محصولات",
          children: [
            { name: "لیست گروه محصولات سازمان" },
            { name: "لیست محصولات یک سازمان" },
            { name: "مشاهده پایپلاین یک محصول" },
            { name: "مشاهده لیست محصولات" },
            { name: "لیست اکشن های پایپلاین با کدمحصول/شناسه پایپلاین" },
          ],
        },
        {
          name: "مدیریت قالب",
          children: [
            { name: "فعال/غیرفعال/حذف یک قالب" },
            { name: "مشاهده همه" },
            { name: "جستجوی قالب براساس نوع و سکشن" },
          ],
        },
        {
          name: "مدیریت سرنخ",
          children: [
            { name: "تغییر وضعیت" },
            { name: "ارتباط سرنخ" },
            { name: "جستجوی سرنخ" },
            { name: "وضعیت بارگذاری سرنخ" },
          ],
        },
      ],
    },
  ],
};

export default function Home() {
  const [targetDataState, setTargetDataState] = useState(targetData);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: targetData.name,
    children: JSON.stringify(targetData.children, null, 2)
  });

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log('Current form data:', formData);
      const parsedChildren = JSON.parse(formData.children);
      console.log('Parsed children:', parsedChildren);
      
      const newData = {
        name: formData.name,
        children: parsedChildren
      };
      console.log('New data to set:', newData);
      
      setTargetDataState(newData);
      console.log('State updated with:', newData);
      setEditing(false);
    } catch (error) {
      console.error('Error parsing JSON:', error);
      alert('Invalid JSON format for children');
    }
  };

  const handleDownload = () => {
    const jsonString = JSON.stringify(targetDataState, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'target-data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Add effect to log state changes
  React.useEffect(() => {
    console.log('targetDataState changed:', targetDataState);
  }, [targetDataState]);

  return (
    <div>
      <div style={{ marginBottom: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
          <h3>Target Data Editor</h3>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button 
              onClick={handleDownload}
              style={{ padding: '8px 16px', backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: '4px' }}
            >
              Download JSON
            </button>
            {editing ? (
              <>
                <button 
                  type="submit"
                  onClick={handleUpdate}
                  style={{ padding: '8px 16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' }}
                >
                  Update
                </button>
                <button 
                  onClick={() => setEditing(false)}
                  style={{ padding: '8px 16px', backgroundColor: '#ff4444', color: 'white', border: 'none', borderRadius: '4px' }}
                >
                  Cancel
                </button>
              </>
            ) : (
              <button 
                onClick={() => {
                  setEditing(true);
                  setFormData({
                    name: targetDataState.name,
                    children: JSON.stringify(targetDataState.children, null, 2)
                  });
                }}
                style={{ padding: '8px 16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' }}
              >
                Edit
              </button>
            )}
          </div>
        </div>

        {editing ? (
          <form onSubmit={handleUpdate} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '5px' }}>Children (JSON):</label>
              <textarea
                value={formData.children}
                onChange={(e) => setFormData({ ...formData, children: e.target.value })}
                style={{ width: '100%', height: '800px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', fontFamily: 'monospace' }}
              />
            </div>
          </form>
        ) : (
          <div>
            <p><strong>Current Name:</strong> {targetDataState.name}</p>
            <p><strong>Children Structure:</strong></p>
            <pre style={{ 
              backgroundColor: '#f5f5f5', 
              padding: '10px', 
              borderRadius: '4px',
              overflow: 'auto',
              maxHeight: '200px'
            }}>
              {JSON.stringify(targetDataState.children, null, 2)}
            </pre>
          </div>
        )}
      </div>
      
      <TreeComparator 
        currentData={currentData} 
        targetData={targetDataState} 
      />
    </div>
  );
}
