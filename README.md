<br/>
<p align="middle">
  <img width="200px;" src="./src/images/moonbucks.png"/>
</p>
<h2 align="middle">JS 문벅스 카페메뉴 앱</h2>
<p align="middle">Vanilla JS로 구현 하는 상태관리가 가능한 카페메뉴 앱</p>
<p align="middle">
  <img src="https://img.shields.io/badge/version-1.0.0-blue?style=flat-square" alt="template version"/>
  <img src="https://img.shields.io/badge/language-html-red.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/language-css-blue.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/language-js-yellow.svg?style=flat-square"/>
  <a href="https://github.com/blackcoffee-study/js-lv1-book-manual/blob/main/LICENSE" target="_blank">
    <img src="https://img.shields.io/github/license/blackcoffee-study/moonbucks-menu.svg?style=flat-square&label=license&color=08CE5D"/>
  </a>
</p>

<p align="middle">
  <img width="400" src="./src/images/moonbucks-main.png">
</p>

<p align="middle">
  <a href="https://blackcoffee-study.github.io/moonbucks-menu/">🖥️ 데모 링크</a>
</p>

<br/>

## 🎯 step1 요구사항 - 돔 조작과 이벤트 핸들링으로 메뉴 관리하기

- 메뉴 추가 기능

  - [x] 메뉴의 이름을 입력 받는다.
  - [x] 추가되는 메뉴는 마크업 양식 안에 넣어 `<ul id="espresso-menu-list" class="mt-3 pl-0"></ul>` 안에 삽입해야 한다.

    ```js
    <li class="menu-list-item d-flex items-center py-2">
      <span class="w-100 pl-2 menu-name">${name}</span>
      <button
        type="button"
        class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
      >
        수정
      </button>
      <button
        type="button"
        class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
      >
        삭제
      </button>
    </li>
    ```

  - [x] 입력 받고 엔터키를 입력하면 메뉴가 추가된다.
  - [x] 메뉴가 추가되고 나면, input은 빈 값으로 초기화한다.
  - [x] 메뉴가 추가되면 메뉴 개수를 카운트하여 상단에 보여준다.
  - [x] 사용자 입력값이 빈 값이라면 추가되지 않는다.
  - [x] 입력 받고 확인 버튼을 눌러도 메뉴가 추가된다.

- 메뉴 수정 기능

  - [x] 수정 버튼을 누르면 클릭 이벤트를 감지하여 `prompt` 창이 팝업된다.
  - [x] `prompt` 창에서 확인을 누르면 메뉴가 업데이트된다.

- 메뉴 삭제 기능
  - [x] 삭제 버튼을 누르면 클릭 이벤트를 감지하여 `confirm` 창이 팝업된다.
  - [x] `confirm` 창에서 확인을 누르면 메뉴가 삭제된다.
  - [x] 메뉴가 삭제되면 메뉴 개수를 카운트하여 상단에 보여준다.

## 🎯 step2 요구사항 - 상태 관리로 메뉴 관리하기

- localStorage Write & Read

  - [x] 메뉴 추가, 수정, 삭제시 데이터를 localStorage에 저장한다.
  - [ ] 새로고침시 localStorage에 있는 데이터를 불러온다.

- 메뉴판 관리

  - [x] 에스프레소 메뉴판 관리
  - [ ] 프라푸치노 메뉴판 관리
  - [ ] 블렌디드 메뉴판 관리
  - [ ] 티바나 메뉴판 관리
  - [ ] 디저트 메뉴판 관리

- 페이지 접근시 최초 데이터 Read & Rendering

  - [ ] 새로고침시 localStorage의 에스프레소 메뉴를 불러온다.
  - [ ] 에스프레소 메뉴를 페이지에 그려준다.

- 품절 상태 관리

  - [ ] 품절 상품에 품절 버튼을 추가한다.
  - [ ] 품절 버튼을 클릭하면 상품에 `sold-out` class를 추가한다.
  - [ ] 품절 버튼을 클릭하면 localStorage에 상태값이 저장된다.

    ```js
    <li class="menu-list-item d-flex items-center py-2">
      <span class="w-100 pl-2 menu-name sold-out">${name}</span>
      <button
        type="button"
        class="bg-gray-50 text-gray-500 text-sm mr-1 menu-sold-out-button"
      >
        품절
      </button>
      <button
        type="button"
        class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
      >
        수정
      </button>
      <button
        type="button"
        class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
      >
        삭제
      </button>
    </li>
    ```

## 🎯 step3 요구사항 - 서버와의 통신을 통해 메뉴 관리하기

- [ ] [링크](https://github.com/blackcoffee-study/moonbucks-menu-server)에 있는 웹 서버 저장소를 clone하여 로컬에서 웹 서버를 실행시킨다.
- [ ] 웹 서버를 띄워서 실제 서버에 데이터의 변경을 저장하는 형태로 리팩터링한다.
  - [ ] localStorage에 저장하는 로직은 지운다.
  - [ ] fetch 비동기 api를 사용하는 부분을 async await을 사용하여 구현한다.
  - [ ] API 통신이 실패하는 경우에 대해 사용자가 알 수 있게 [alert](https://developer.mozilla.org/ko/docs/Web/API/Window/alert)으로 예외처리를 진행한다.
- [ ] 중복되는 메뉴는 추가할 수 없다.

## 📝 API

### baseUrl

`http://localhost:3000`

### 메뉴 생성하기

| method | uri                          |
| ------ | ---------------------------- |
| POST   | /api/category/:category/menu |

```javascript
{
 requestBody: {
   "name": "string"
 },
 response: {
   "id": "string",
   "name": "string",
   "isSoldOut": Boolean
  }
}
```

### 카테고리별 메뉴리스트 불러오기

| method | uri                          |
| ------ | ---------------------------- |
| GET    | /api/category/:category/menu |

```javascript
{
  response: [
    {
      id: 'string',
      name: 'string',
      isSoldOut: Boolean,
    },
  ];
}
```

### 메뉴 이름 수정하기

| method | uri                                  |
| ------ | ------------------------------------ |
| PUT    | /api/category/:category/menu/:menuId |

```javascript
{
 requestBody: {
   "name": "string"
 },
 response: {
   "id": "string",
   "name": "string",
   "isSoldOut": Boolean
  }
}
```

### 메뉴 품절 처리하기

| method | uri                                          |
| ------ | -------------------------------------------- |
| PUT    | /api/category/:category/menu/:menuId/soldout |

```javascript
{
 response: {
   "id": "string",
   "name": "string",
   "isSoldOut": Boolean
  }
}
```

### 메뉴 삭제하기

| method | uri                                  |
| ------ | ------------------------------------ |
| DELETE | /api/category/:category/menu/:menuId |

```javascript
응답 데이터 없음
```

<br/>

## ⚙️ Before Started

#### <img alt="Tip" src="https://img.shields.io/static/v1.svg?label=&message=Tip&style=flat-square&color=673ab8"> 로컬에서 서버 띄워서 손쉽게 static resources 변경 및 확인하는 방법

로컬에서 웹서버를 띄워 html, css, js 등을 실시간으로 손쉽게 테스트해 볼 수 있습니다. 이를 위해서는 우선 npm이 설치되어 있어야 합니다. 구글에 `npm install` 이란 키워드로 각자의 운영체제에 맞게끔 npm을 설치해주세요. 이후 아래의 명령어를 통해 실시간으로 웹페이지를 테스트해볼 수 있습니다.

```
npm install -g live-server
```

실행은 아래의 커맨드로 할 수 있습니다.

```
live-server 폴더명
```

<br/>

## 💻 Code Review

아래 링크들에 있는 리뷰 가이드를 보고, 좋은 코드 리뷰 문화를 만들어 나가려고 합니다.

- [코드리뷰 가이드1](https://edykim.com/ko/post/code-review-guide/)
- [코드리뷰 가이드2](https://wiki.lucashan.space/code-review/01.intro/)

<br/>

## 👏🏼 Contributing

만약 미션 수행 중에 개선사항이 필요하다면, 언제든 자유롭게 PR을 보내주세요.

<br/>

## 🐞 Bug Report

버그를 발견한다면, [Issues](https://github.com/blackcoffee-study/moonbucks-menu/issues)에 등록해주세요.

<br/>

## 📝 License

This project is [MIT](https://github.com/blackcoffee-study/moonbucks-menu/blob/main/LICENSE) licensed.
