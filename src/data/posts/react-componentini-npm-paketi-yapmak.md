---
date: "2021-01-22"
path: "/react-componentini-npm-paketi-yapmak"
title: "React Componentini Npm Paketi Yapmak"
category: "Yazılım"
subCategories: "React"
medium: "https://omergulcicek.medium.com/react-componentini-npm-paketi-yapmak-5ff4dbefc189"
---

Site geliştirirken sağ tarafta çıkan scroll bar'ları her zaman gizlemeyi tercih ettim. Çok sağlıklı bir yol olmayabilir fakat sayfanın tasarımını bozması beni çok rahatsız ediyordu. Ardından bir süredir düşündüğüm tasarımı koda dökerek yuvarlak bir progress bar geliştirdim. Son olarakta bunu bir paket haline getirip npm'e atmaya karar verdim. Bu makalede ise adım adım bu işlemleri anlatacağım.

## React Npm Template

İlk olarak <a href="https://medium.com/groftware/how-to-publish-your-react-component-on-npm-9cf48d91944d" target="_blank" rel="noreferrer noopener">Chan Jing Hong'ın geliştirdiği React Npm Template'ini</a> klonluyoruz. Bu paket bize React'ı build etmemize sağlayacak en temel gereksinimleri sağlıyor.

![React Npm Template](/img/blog/2021-01-22/react-npm-template.png)

## React Component'inizi Eklemek

İkinci aşamada geliştirdiğiniz React componentini `/src` klasörünün içerisine taşıyoruz. İhtiyaç duyacağınız tüm `.css` yada `.js` dosyalarını burada tutuyoruz.

![React Component'inin Eklenmesi](/img/blog/2021-01-22/react-componentinin-eklenmesi.png)

## package.json Dosyasının Düzenlenmesi

`package.json` dosyasını açıp `"name": "YOUR_PACKAGE_NAME"` olan satırda npm paketimize kullanılmayan bir isim vermemiz gerekiyor. Paketiniz için ihtiyaç duyduğun farklı paketler var ise burada eklememiz gerekiyor. Ben geliştirdiğim pakette bunlara ek farklı bir ihtiyacım olmadığı için olduğu gibi bıraktım. Dosyanız şunun gibi duracak;

```json
{
	"name": "YOUR_PACKAGE_NAME", // <- Npm paketinizin adı
	"version": "0.0.1", // <- Npm paketinizin sürümü
	"description": "",
	"main": "./lib/YOUR_COMPONENT.js", // <- React bileşenizin adı
	"license": "MIT",
	"scripts": {
		"build": "webpack"
	},
	"peerDependencies": {
		"prop-types": "^15.6.0",
		"react": "^16.0.0",
		"react-dom": "^16.0.0"
	},
	"devDependencies": {
		"prop-types": "^15.6.0",
		"babel-core": "^6.21.0",
		"babel-loader": "^7.1.4",
		"babel-preset-env": "^1.6.1",
		"babel-preset-react": "^6.16.0",
		"babel-preset-stage-0": "^6.24.1",
		"css-loader": "^3.5.1",
		"path": "^0.12.7",
		"react": "^16.0.0",
		"react-dom": "^16.0.0",
		"style-loader": "^1.1.3",
		"webpack": "^4.5.0",
		"webpack-cli": "^3.2.1"
	},
	"dependencies": {}
}
```

`npm install` (_yada `yarn install`_) komutu ile paketlerimizin tamamının yüklenmesini bekliyoruz.

## webpack.config.js

Son aşamaya geçmeden önce webpack config dosyamızda componentimizin konumunu belirtip, ES6 kodlarımızın ES5'e çevrildiğinde hangi konuma çıkarılması gerektiğini belirtiyoruz.

```js
const path = require("path")

module.exports = {
	mode: "production",
	entry: "./src/MyCoolButton.js", // <- React bileşenizin konumu
	output: {
		path: path.resolve("lib"),
		filename: "MyCoolButton.js", // <- React bileşenizin adı
		libraryTarget: "commonjs2"
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /(node_modules)/,
				use: "babel-loader"
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			}
		]
	},
	resolve: {
		alias: {
			react: path.resolve(__dirname, "./node_modules/react"),
			"react-dom": path.resolve(__dirname, "./node_modules/react-dom")
		}
	},
	externals: {
		react: {
			commonjs: "react",
			commonjs2: "react",
			amd: "React",
			root: "React"
		},
		"react-dom": {
			commonjs: "react-dom",
			commonjs2: "react-dom",
			amd: "ReactDOM",
			root: "ReactDOM"
		}
	}
}
```

## Kodlarınızı Paketlemek

Ve son olarak `npm run build` komutu ile kodlarımızın tarayıcıların anlayacağı seviyeye dönüşmesini bekliyoruz. Sonrasında paketimiz npm'e gönderilmeye hazır.

`npm login` komutu ile üyeliğimize giriş yaptıktan sonra, `npm publish` komutu ile paketimizi npm'de yayınlıyoruz. Her publish'te `package.json` dosyasında versiyon yükseltmeyi unutmayın.

### Kaynaklar

- <a href="https://medium.com/groftware/how-to-publish-your-react-component-on-npm-9cf48d91944d" target="_blank" rel="noreferrer noopener">How to publish your React component on npm</a>
