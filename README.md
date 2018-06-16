# Install it and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download))

```bash
now
```

## The idea behind the example

Next.js allows the construction of custom Documents. This feature enable the usage of custom attributes and elements. In this case, AMP tags and attributes.

## files folder
```
╰─$ tree -I node_modules
.
├── README.md
├── components
│   └── Byline.js
├── package.json
├── pages
│   ├── _document.js
│   └── index.js
├── static
│   ├── 623518.mp3
│   ├── cat.jpg
│   └── dog.jpg
└── yarn.lock
```

## 增加新 mp3 檔

```
直接放在 static 目錄下, 跟 623518.mp3 一樣
本機測試時 URL 是 http://localhost:3000/static/623518.mp3
now 以後
URL 是 部署後的 URL, 後面加 /static/623518.mp3

## demo on "now"

https://with-amp-kvmoegoyaw.now.sh


