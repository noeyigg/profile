// index에 있는 공통 컴포넌트 불러오는 fetch 함수
const fetchComponent = (component, tag) => {
    fetch('index.html')
        .then(response => response.text())
        .then(data => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');
        const parsedComponent = doc.querySelector(component);
        document.getElementById(tag).innerHTML = parsedComponent.outerHTML;
  });
}

const positionPopover = () => {
    const popover = document.getElementById('popover');
    const popoverWidth = popover.offsetWidth;
    const windowWidth = window.innerWidth;

    const rightX = popoverWidth - windowWidth;

    popover.style.position = 'absolute';
    popover.style.top = '60rem';
    popover.style.left = `${rightX}px`;
}

// 공통 헤더 불러오기
fetchComponent('header', 'common-header');