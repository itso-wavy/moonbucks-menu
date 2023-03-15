// - localStorage Write & Read
//     - [ ]  메뉴 추가, 수정, 삭제시 데이터를 localStorage에 저장한다.
//     - [ ]  새로고침시 localStorage에 있는 데이터를 읽어온다.
// - 메뉴판 관리
//     - [ ]  에스프레소 메뉴판 관리
//     - [ ]  프라푸치노 메뉴판 관리
//     - [ ]  블렌디드 메뉴판 관리
//     - [ ]  티바나 메뉴판 관리
//     - [ ]  디저트 메뉴판 관리
// - 페이지 접근시 최초 데이터 Read & Rendering
//     - [ ]  새로고침시 localStorage의 에스프레소 메뉴를 읽어온다.
//     - [ ]  에스프레소 메뉴를 페이지에 그려준다.
// - 품절 상태 관리

const $ = (selector) => document.querySelector(selector);

const store = {
  setLocalStorage(menu) {
    localStorage.setItem('menu', JSON.stringify(menu));
  },
  getLocalStorage() {
    return JSON.parse(localStorage.getItem('menu'));
  },
};

function App() {
  // 상태 관리- ① 메뉴명, ② 품절 여부
  // 데이터 관리- ① 에스프레소, ② 티바나, ...

  this.menu = []; // 초기화

  const handleMenuCount = () => {
    $('.menu-count').textContent = `총 ${
      $('#espresso-menu-list').querySelectorAll('li').length
    }개`;
  };

  const addMenu = () => {
    if ($('#espresso-menu-name').value === '') {
      alert('값을 입력해주세요.');
      return;
    }
    const menuname = $('#espresso-menu-name').value;
    this.menu.push({ name: menuname });
    store.setLocalStorage(this.menu);
    const template = this.menu
      .map((item, index) => {
        return `
    <li data-menu-id='${index}' class="menu-list-item d-flex items-center py-2">
      <span class="w-100 pl-2 menu-name">${item.name}</span>
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
    `;
      })
      .join('');
    $('#espresso-menu-list').innerHTML = template;
    $('#espresso-menu-name').value = '';
    handleMenuCount();
  };

  const editMenu = (e) => {
    const menuId = e.target.closest('li').dataset.menuId;
    const $menuName = e.target.closest('li').querySelector('.menu-name');
    const updatedMenuName = prompt('메뉴를 수정하세요', $menuName.textContent);
    this.menu[menuId].name = updatedMenuName;
    store.setLocalStorage(this.menu);
    $menuName.textContent = updatedMenuName;
  };
  // };

  const deleteMenu = (e) => {
    if (confirm('정말 삭제하시겠습니까?')) {
      e.target.closest('li').remove();
      handleMenuCount();
    }
  };

  $('#espresso-menu-list').addEventListener('click', (e) => {
    if (e.target.classList.contains('menu-edit-button')) editMenu(e);
    if (e.target.classList.contains('menu-remove-button')) deleteMenu(e);
  });

  $('#espresso-menu-form').addEventListener('submit', (e) =>
    e.preventDefault()
  );

  $('#espresso-menu-submit-button').addEventListener('click', addMenu);

  $('#espresso-menu-name').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addMenu();
    }
  });
}

new App();
