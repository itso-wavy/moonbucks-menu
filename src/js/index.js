const $ = (selector) => document.querySelector(selector);

function App() {
  const handleMenuCount = () => {
    $(".menu-count").textContent = `총 ${
      $("#espresso-menu-list").querySelectorAll("li").length
    }개`;
  };

  const addMenu = () => {
    if ($("#espresso-menu-name").value === "") {
      alert("값을 입력해주세요.");
      return;
    }
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
    $("#espresso-menu-list").insertAdjacentHTML(
      "beforeend",
      menuTemplete($("#espresso-menu-name").value)
    );
    $("#espresso-menu-name").value = "";
    handleMenuCount();
  };

  const editMenu = (e) => {
    if (e.target.classList.contains("menu-edit-button")) {
      const $menuName = e.target.closest("li").querySelector(".menu-name");
      const updatedMenuName = prompt(
        "메뉴를 수정해주세요",
        $menuName.textContent
      );
      $menuName.textContent = updatedMenuName;
    }
  };

  const deleteMenu = (e) => {
    if (e.target.classList.contains("menu-remove-button")) {
      if (confirm("정말 삭제하시겠습니까?")) {
        e.target.closest("li").remove();
        handleMenuCount();
      }
    }
  };

  $("#espresso-menu-list").addEventListener("click", (e) => {
    editMenu(e);
    deleteMenu(e);
  });

  $("#espresso-menu-form").addEventListener("submit", (e) =>
    e.preventDefault()
  );

  $("#espresso-menu-submit-button").addEventListener("click", addMenu);

  $("#espresso-menu-name").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addMenu();
    }
  });
}

App();
