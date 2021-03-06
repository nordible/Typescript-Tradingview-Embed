const EmbedSymbolInfoChart = (
    elementId: string,
    symbol: string,
    width: string,
    locale: string,
    colorTheme: string,
    referral_id: string,
    isTransparent: boolean
) => {
    if (document.getElementById(elementId) && document.getElementById(elementId)!.innerHTML === "") {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js'
        script.async = true;
        script.innerHTML = JSON.stringify({
            symbol: symbol,
            width: width,
            locale: locale,
            colorTheme: colorTheme,
            referral_id: referral_id,
            isTransparent: isTransparent            
        });
        document.getElementById(elementId)!.appendChild(script);
    }
}

export { EmbedSymbolInfoChart };