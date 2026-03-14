# Ahmed Esam Portfolio

جاهز للرفع على GitHub Pages بدون Build step.

## Structure
- `index.html` الصفحة الرئيسية
- `portfolio/` صفحات تفاصيل المشاريع
- `assets/` الصور و CSS و JavaScript والمكتبات
- `404.html` نسخة احتياطية للروابط على GitHub Pages
- `.nojekyll` يمنع GitHub Pages من تجاهل بعض الملفات

## طريقة الرفع اليدوي على GitHub Pages

### Option 1: Publish from `main` branch
1. أنشئ Repository جديد على GitHub.
2. ارفع كل الملفات كما هي داخل جذر الـ repo.
3. ادخل إلى `Settings` ثم `Pages`.
4. من `Build and deployment` اختر:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - `Folder`: `/ (root)`
5. احفظ وانتظر دقيقة أو دقيقتين.
6. الرابط سيكون غالبًا:
   - `https://USERNAME.github.io/REPOSITORY-NAME/`

### Option 2: User site
لو اسم الـ repo هو:
- `USERNAME.github.io`

وقتها الموقع يفتح مباشرة من:
- `https://USERNAME.github.io/`

## Important note
كل الروابط داخل المشروع مكتوبة بشكل نسبي `relative paths`، لذلك الموقع يشتغل سواء على:
- repo عادي على GitHub Pages
- أو user site مباشر

## Before upload
- لو عندك CV PDF ضعه مثلًا هنا:
  - `assets/files/Ahmed-Esam-Hasan-CV.pdf`
- ولو ستربطه بزر داخل الصفحة أضف المسار النسبي فقط.

## Current public profiles
- GitHub: `https://github.com/ahmedesamhasan`
- LinkedIn: `https://linkedin.com/in/iam-ahmed-esam`
- Email: `Iam.AhmedEsam@gmail.com`
# cv-e2-ahmedesam
