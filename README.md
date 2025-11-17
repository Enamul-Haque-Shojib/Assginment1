# Blog Post
### What are some differences between interfaces and types in TypeScript?
### Ans: 
### interface: 
- এক বা একাধিক interface কে extends করা যায়।
- একই নামে একাধিকবার Declare করলে স্বয়ংক্রিয়ভাবে merge হয়।
- object এর মতো structure বর্ণনা করতে ব্যবহৃত হয়।

### type:
- & (intersection) ব্যবহার করে টাইপ কম্বাইন করা হয়।
- একই নাম আবার Declare করলে error দেয়।
- primitive, union, intersection, tuple সহ সবকিছু represent করতে পারে।

### Explain the difference between any, unknown, and never types in TypeScript.
### Ans:
### any:
- এটি ব্যবহার করলে  টাইপস্ক্রিপ্ট সব ধরনের চেক বন্ধ করে দেয়।
- টাইপ সেফটি সম্পূর্ণ নষ্ট হয়ে যায়
### unknown:
- যে কোনো টাইপ ব্যবহার করা যাই, কিন্তু
ব্যবহার করতে হলে টাইপ চেক করতে হবে।
- any এর মতো সুবিধা, কিন্তু নিরাপত্তাসহ

### never:
- এটি এমন টাইপ যা কোনো ভ্যালু ধারণ করতে পারে না।
- কখনো রিটার্ন করে না এমন ফাংশনে ব্যবহৃত হয়
