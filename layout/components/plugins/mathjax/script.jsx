const MathJaxScripts = (props) => {
    const { theme } = props;

    const loadMathScript = `
        function load_math() {    
            if (typeof MathJax == "undefined")  // 没有载入脚本就先载入脚本
                stellar.loadScript('${theme.plugins.mathjax.cdn}', {defer:true});
            else { // 否则立即渲染
                MathJax.typesetPromise()
            }
        }
        InstantClick.on('change', () => {
            load_math() 
        });
        window.addEventListener(
            "load", load_math, false
        );
    `;
    return <script data-no-instant="true" dangerouslySetInnerHTML={{__html: loadMathScript}}/>;
};

module.exports = MathJaxScripts;
