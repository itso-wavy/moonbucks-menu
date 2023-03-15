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
    localStorage.getItem('menu');
  },
};

function App() {
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
    const espressoMenuName = $('#espresso-menu-name').value;

    const menuTemplete = (newMenu) => {
      return `
    <li class="menu-list-item d-flex items-center py-2">
      <span class="w-100 pl-2 menu-name">${newMenu}</span>
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
    };
    $('#espresso-menu-list').insertAdjacentHTML(
      'beforeend',
      menuTemplete(espressoMenuName)
    );
    espressoMenuName = '';
    handleMenuCount();
  };

  const editMenu = (e) => {
    if (e.target.classList.contains('menu-edit-button')) {
      const $menuName = e.target.closest('li').querySelector('.menu-name');
      const updatedMenuName = prompt(
        '메뉴를 수정해주세요',
        $menuName.textContent
      );
      $menuName.textContent = updatedMenuName;
    }
  };

  const deleteMenu = (e) => {
    if (e.target.classList.contains('menu-remove-button')) {
      if (confirm('정말 삭제하시겠습니까?')) {
        e.target.closest('li').remove();
        handleMenuCount();
      }
    }
  };

  $('#espresso-menu-list').addEventListener('click', (e) => {
    editMenu(e);
    deleteMenu(e);
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

App();
