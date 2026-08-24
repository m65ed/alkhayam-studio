# Al Khayam Studio Website — Final

التعديلات:
- شعار ستوديو الخيام الأصلي بصيغة PNG وخلفية شفافة.
- صور هيرو مستقلة عن صور بطاقات الفروع، بدون فراغات جانبية.
- قص 16:9 مخصص لكل فرع لإظهار اللوحة والمدخل.
- منذ 1991، وعدد سنوات الخبرة يحسب تلقائيًا حسب السنة الحالية.
- زر عربي / English.
- التقييمات تتغير فعليًا كل 4 ثوانٍ.
- أرقام التقييمات الحالية تحسب من بيانات الفروع.
- التحديث المباشر من Google يحتاج Google Business Profile API بعد الموافقة.

- v7: إزالة أي فراغات/حواف سوداء من صور الهيرو وبطاقات الفروع.
- قص مستقل للبطاقات بنسبة 5:3 مع إبقاء لوحة المحل والمدخل داخل الإطار.
- صور الهيرو تستخدم الصور الأصلية عالية الجودة مع object-fit: cover بدون padding.

- v8: تنويع أكبر في المراجعات، مع إظهار اسم العميل الواضح بدل عبارة عامة.
- التقييمات الإنجليزية تظهر مترجمة للعربية في النسخة العربية، وبالنص الإنجليزي عند اختيار English.
- تدوير 3 مراجعات كل 5 ثوانٍ.

- v9: إضافة Find Nearest Branch باستخدام موقع المستخدم (تقريب المسافة محليًا بدون حفظ الموقع).
- معرض صور حقيقي للفروع.
- تفاصيل مستقلة لكل فرع.
- FAQ كامل.
- زر واتساب ثابت مع اختيار الفرع.
- الحفاظ على أسلوب تصميم طبيعي ومؤسسي بعيد عن العبارات الزائدة أو المؤثرات المبالغ فيها.

- v10: إصلاح خطأ JavaScript كان يمنع ظهور محتوى الموقع بعد تحميل الصفحة.

- v11: KH5 فقط في الصورة الرئيسية.
- إضافة أوقات العمل الفعلية الحالية لكل فرع.
- عرض حالة الفرع (مفتوح/مغلق) ودوام اليوم تلقائيًا بتوقيت الرياض.
- إضافة زر لعرض الفروع المفتوحة الآن.
- تفاصيل الفروع أصبحت: الموقع، دوام اليوم، الحالة، تقييم Google، وجدول أسبوعي كامل.
- تحديث FAQ حسب معلومات العمل الفعلية.
- إصلاح اتجاه رقم الشكاوى والاقتراحات.
- استبدال أعلى فرع تقييمًا بسنوات الخبرة منذ 1991.
- تحديث إحداثيات الفروع إلى المواقع الدقيقة من روابط Google Maps.

- v13: إعادة بناء دليل الصور الرسمية بثلاث بطاقات متساوية: السعودية، شنغن، أمريكا.
- شنغن: 35×45 مم مع متطلبات التصوير وفق إرشادات الاتحاد الأوروبي/ICAO.
- أمريكا: 51×51 مم مع متطلبات وزارة الخارجية الأمريكية.
- إضافة جدول المقاسات الفعلي من قائمة الاستوديو بدون أسعار.
- فصل مقاسات الطباعة عن Wood Lamination / Foam Board.

- v14: إزالة تكرار تفاصيل الفروع، دمج المقاسات مع دليل الصور، إضافة الإقامة والمدرسة والفحص الطبي، قصة الأجيال، وتحديث جمعة KH1 إلى 4م–11م.

- v15: FAQ كامل مبني على سياسات العمل الفعلية، مصنف بدون حشو، مع سياسات اللقطات والنسخ الإلكترونية والرفض الرسمي والعسكري والأطفال والأرشيف والسكانر والشركات والفروع والشكاوى.

- v16: إصلاح تصنيفات الأسئلة لتعمل فعليًا عند الضغط.
- إخفاء نص الإجابة بالكامل حتى فتح السؤال.
- الإبقاء على صورة KH5 فقط في الصفحة الرئيسية وإلغاء تدوير صور الفروع الأخرى.

- Final: A5 مع 15×20، وA4 مع 20×30، وA3 مع 30×40.
- إضافة FAQ للصور المهنية، التخرج، PNG، العقارات والمشاريع، تعدد المقاسات والصور بدون تعديل.
- إضافة سياسات حفظ الصور، تغيير رقم الجوال، البحث بالفاتورة وخصوصية الصور المحفوظة.

- v19 SEO FINAL: استبدال نوع Schema غير القياسي بـ LocalBusiness لكل فرع.
- إضافة KH1/KH4/KH5/KH6/KH7/KH8/KH9/KH10 بوضوح في أسماء الفروع.
- إضافة أوقات الدوام لكل فرع إلى openingHoursSpecification.
- إضافة روابط Google Maps لكل فرع عبر hasMap وصورة الفرع ورقم التواصل والإحداثيات.
- إضافة WebSite وWebPage وOfferCatalog للخدمات الأساسية.
- تحسين alt للصور، lazy loading لصور الفروع، وpreload/fetchpriority لصورة الهيرو KH5.
- تحديث sitemap.xml بتاريخ 2026-08-17.

- v21 NO VISUAL CHANGE / API READY:
  - مبني على v19 SEO FINAL للحفاظ على شكل الموقع الحالي كما هو.
  - لا تعديل على CSS أو تخطيط الصفحة أو النصوص المرئية الحالية.
  - تجهيز عدد تقييمات كل فرع ومتوسطه ليُستبدلا لاحقًا من /api/reviews-summary.
  - إجمالي التقييمات والمتوسط الموزون سيظلان محسوبين بنفس دوال الموقع الحالية، لكن من البيانات الحية بعد الربط.
  - تجهيز سلايدر التعليقات لقبول مراجعات Google ذات 5 نجوم والتي تحتوي نصًا فعليًا فقط.
  - تبقى كل القيم الحالية fallback حتى موافقة Google ونشر الـCloudflare Worker.
  - إضافة favicon متعدد المقاسات وmanifest فقط؛ لا يغيّر تصميم الصفحة.

- v22 MANUAL REVIEWS UPDATED (2026-08-17):
  - KH1: 4.4 / 439
  - KH4: 4.5 / 164
  - KH5: 4.8 / 523
  - KH6: 4.4 / 233
  - KH7: 4.3 / 381
  - KH8: 4.3 / 32
  - KH9: 4.4 / 324
  - KH10: 4.4 / 234
  - إجمالي التقييمات المحسوب من الفروع: 2,330
  - المتوسط الموزون المحسوب: 4.48 / 5 تقريبًا
  - لا تغيير في التصميم أو CSS.

- v23 MANUAL REVIEWS UPDATED (2026-08-24):
  - KH1: 4.4 / 445
  - KH4: 4.5 / 178
  - KH5: 4.8 / 566
  - KH6: 4.4 / 237
  - KH7: 4.3 / 395
  - KH8: 4.4 / 40
  - KH9: 4.5 / 372
  - KH10: 4.4 / 239
  - إجمالي التقييمات المحسوب من الفروع: 2,472
  - المتوسط الموزون المحسوب: 4.50 / 5 تقريبًا
  - تحديث كل بطاقات الفروع، تفاصيل الفروع، قسم أقرب فرع، وإحصاءات الصفحة من نفس بيانات الفروع.
  - تحديث fallback الظاهر قبل JavaScript إلى 2,472+ و4.50 / 5.
  - رفع إصدار ملف JavaScript إلى script-v18.js لتفادي الكاش القديم عند النشر.



- v24 BRANCH LANDING PAGES / LOCAL SEO (2026-08-24):
  - إنشاء صفحة مستقلة لكل فرع من الفروع الثمانية بمسار URL ثابت وقابل للفهرسة.
  - كل صفحة تحتوي فقط على المعلومات المهمة: الموقع، الدوام، واتساب الفرع، خيامون، تقييم Google الحالي، الخدمات الأساسية، وصف الفرع، وروابط الاتجاهات.
  - إضافة canonical وOpen Graph وBreadcrumbList وLocalBusiness Schema مستقل لكل فرع.
  - استخدام رقم خيامون 053 277 1684 كرقم الهاتف الأساسي في LocalBusiness Schema لجميع الفروع ليتوافق مع Google Business Profile، مع إبقاء واتساب كل فرع كتواصل مباشر إضافي.
  - تحديث روابط LocalBusiness في الصفحة الرئيسية لتشير إلى صفحات الفروع بدل #branches.
  - إضافة زر «تفاصيل الفرع» لكل بطاقة فرع في الصفحة الرئيسية.
  - تحديث sitemap.xml ليشمل صفحات الفروع الثمانية.
  - إبقاء صور الفروع الحالية مؤقتًا؛ تستبدل بأفضل صور الموظفين عند وصول الدفعة الجديدة.

- v25 BRANCH DIRECT PHONE NUMBERS (2026-08-24):
  - جعل رقم كل فرع المستقل هو رقم الاتصال الأساسي داخل صفحة الفرع نفسها.
  - تحديث زر الاتصال أعلى صفحة كل فرع ليطلب رقم الفرع مباشرة بدل رقم خيامون المركزي.
  - إضافة «رقم الفرع» بوضوح في معلومات الفرع مع رابط اتصال مباشر.
  - إضافة زر اتصال مباشر بجانب Google Maps وواتساب في قسم الوصول.
  - تحديث LocalBusiness Schema في صفحات الفروع والصفحة الرئيسية ليستخدم رقم الفرع المستقل لكل موقع.
  - الإبقاء على واتساب كل فرع على رقمه نفسه، وإزالة تنبيه خيامون من صفحات الفروع لتقليل التشتيت.

## v26 — Phone number display fix
- Fixed RTL/BiDi rendering of Saudi mobile numbers across all 8 branch pages.
- Phone numbers are now isolated with `<bdi dir="ltr">` so `050 266 3472` displays in the correct order inside Arabic UI.
- Call/WhatsApp href values were not changed; only visual rendering was corrected.
- Updated branch page CSS to `branch-pages-v2.css`, main CSS to `styles-v19.css`, and main JS to `script-v20.js` for cache busting.


## v26 – Phone display & contact cleanup
- Fixed RTL phone-number rendering using LTR isolate override and non-breaking spaces.
- Phone numbers are now displayed once in each branch information section.
- WhatsApp and Call remain separate action buttons, but the same number is no longer repeated inside both buttons.
- Branch page CSS bumped to `branch-pages-v3.css`; homepage CSS/JS bumped to `styles-v20.css` / `script-v21.js` to avoid stale browser cache.


## v27
- Fixed RTL phone rendering using separate LTR digit groups (e.g. 050 266 3472).
- Call/WhatsApp action buttons do not repeat the visible phone number.
- Added no-cache meta to branch pages to reduce stale local previews.
- Branch URLs remain unchanged for Google Business Profile website fields.


## v28
- KH8 branch locality standardized to Badr District based on the Google listing/address used in the audit.
- KH8 public branch URL is now /branches/kh8-dammam-badr/.


## v29 — Clean Google Business Profile branch URLs (2026-08-24)
- Shortened the public branch landing-page URLs for cleaner Google Business Profile website fields.
- New canonical URLs: /kh1/, /kh4/, /kh5/, /kh6/, /kh7/, /kh8/, /kh9/, /kh10/.
- Kept all branch names, city/district information, descriptions and LocalBusiness schema on the pages; only the URL path was simplified.
- Updated homepage internal links, LocalBusiness URLs, sitemap.xml and branch-to-branch links.
- Old long /branches/... URLs now point visitors to the new short branch URLs and are excluded from indexing.
