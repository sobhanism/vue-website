# پالت رنگی پروژه

## 🎨 رنگ‌های اصلی شما

| رنگ | کد رنگ | نام متغیر | استفاده |
|-----|---------|-----------|----------|
| ![#3E5F44](https://via.placeholder.com/15/3E5F44/000000?text=+) | `#3E5F44` | `--color-primary-darkest` | هدرها، متن‌های مهم، دکمه‌های اصلی |
| ![#5E936C](https://via.placeholder.com/15/5E936C/000000?text=+) | `#5E936C` | `--color-primary-dark` | لینک‌ها، آیکون‌ها، حاشیه‌ها |
| ![#93DA97](https://via.placeholder.com/15/93DA97/000000?text=+) | `#93DA97` | `--color-primary` | دکمه‌های ثانویه، highlight ها |
| ![#E8FFD7](https://via.placeholder.com/15/E8FFD7/000000?text=+) | `#E8FFD7` | `--color-primary-light` | پس‌زمینه‌های نرم، کارت‌ها |

## 🌈 رنگ‌های مکمل

| رنگ | کد رنگ | نام متغیر | استفاده |
|-----|---------|-----------|----------|
| ![#5F3E58](https://via.placeholder.com/15/5F3E58/000000?text=+) | `#5F3E58` | `--color-accent-purple` | تأکیدات، CTA های خاص |
| ![#935E8C](https://via.placeholder.com/15/935E8C/000000?text=+) | `#935E8C` | `--color-accent-pink` | hover states، انیمیشن‌ها |
| ![#DA93D4](https://via.placeholder.com/15/DA93D4/000000?text=+) | `#DA93D4` | `--color-accent-rose` | notification ها، بج‌ها |
| ![#FFD7F8](https://via.placeholder.com/15/FFD7F8/000000?text=+) | `#FFD7F8` | `--color-accent-lavender` | پس‌زمینه‌های نرم مکمل |

## 🔄 رنگ‌های خنثی

| رنگ | کد رنگ | نام متغیر | استفاده |
|-----|---------|-----------|----------|
| ![#2D3E34](https://via.placeholder.com/15/2D3E34/000000?text=+) | `#2D3E34` | `--color-neutral-dark` | متن‌های تیره، فوتر |
| ![#6C7A73](https://via.placeholder.com/15/6C7A73/000000?text=+) | `#6C7A73` | `--color-neutral` | متن‌های معمولی |
| ![#B8C7BD](https://via.placeholder.com/15/B8C7BD/000000?text=+) | `#B8C7BD` | `--color-neutral-light` | placeholder ها، خطوط جداکننده |
| ![#F0F7F2](https://via.placeholder.com/15/F0F7F2/000000?text=+) | `#F0F7F2` | `--color-neutral-lightest` | پس‌زمینه‌های صفحه |

## 🌟 گرادیانت‌ها

```css
/* گرادیانت اصلی */
background: var(--color-gradient-primary);
/* یا */
background: linear-gradient(135deg, #3E5F44 0%, #5E936C 50%, #93DA97 100%);

/* گرادیانت مکمل */
background: var(--color-gradient-accent);

/* گرادیانت نرم */
background: var(--color-gradient-soft);

/* گرادیانت تیره */
background: var(--color-gradient-dark);
```

## 🎯 نحوه استفاده

```css
/* در فایل‌های CSS */
.my-element {
  color: var(--color-primary-darkest);
  background: var(--color-primary-light);
  border: 1px solid var(--color-primary);
  box-shadow: var(--shadow-primary);
}

/* برای دکمه‌ها */
.btn-primary {
  background: var(--color-gradient-primary);
  color: var(--text-inverse);
}

/* برای کارت‌ها */
.card {
  background: var(--bg-primary);
  border: 1px solid var(--color-neutral-light);
  box-shadow: var(--shadow-soft);
}
```

## 🔗 سازگاری

تمام متغیرهای قبلی حفظ شده‌اند:
- `--color-green-dark` → `--color-primary-darkest`
- `--color-green` → `--color-primary`
- `--color-green-light` → `--color-primary-light`
- و سایر موارد...

## 💡 نکات طراحی

1. **هارمونی رنگی**: رنگ‌های اصلی در طیف سبز و رنگ‌های مکمل در طیف بنفش قرار دارند
2. **کنتراست مناسب**: تمام ترکیبات رنگی استاندارهای دسترسی WCAG را رعایت می‌کنند  
3. **تنوع**: 4 سطح روشنایی برای هر رنگ اصلی موجود است
4. **انعطاف**: گرادیانت‌ها و سایه‌ها برای ایجاد عمق بصری

این پالت رنگی برای وب‌سایت‌های مدرن، طبیعت‌گرا و حرفه‌ای عالی است! 🌿✨
