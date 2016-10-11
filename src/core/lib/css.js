
export default {
    init () {
        // 初始化CSS样式
        let createCss = document.createElement('style');
        createCss.innerHTML = `
        .js-mdropload{
            z-index:1;
            -webkit-transform: translateZ(0);   
            transform: translateZ(0);
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            -webkit-perspective: 1000;
            perspective: 1000;
        }
        .js-mdropload-up {
            position: absolute;
        }
        .js-mdropload-down{
            transition-duration:.5s;
            -webkit-transition-duration:.5s;
        }
        .js-mdropload-up,.js-mdropload-down{
            opacity:0;
            text-align: center;
            height:30px;
            line-height:30px;
            width: 100%;
        }
        .js-mdropload-message {
            opacity:0;
        }
        `;
        document.body.appendChild(createCss);
    }
}