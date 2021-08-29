import React from 'react'
import InnerHTML from 'dangerously-set-html-content'

function Widget() {
  const content = () => {
    const iframeContent = `
      <div class="tradingview-widget-container">
        <div class="tradingview-widget-container__widget"></div>
        <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js" async>
  {
    "symbols": [
      {
        "title": "Nasdaq 100",
        "proName": "OANDA:NAS100USD"
      },
      {
        "title": "EUR/USD",
        "proName": "FX_IDC:EURUSD"
      },
      {
        "title": "BTC/USD",
        "proName": "BITSTAMP:BTCUSD"
      },
      {
        "description": "",
        "proName": "COMEX:GCV2019"
      },
      {
        "description": "",
        "proName": "COMEX:GCZ2019"
      },
      {
        "description": "",
        "proName": "NASDAQ:AAPL"
      },
      {
        "description": "",
        "proName": "NASDAQ:AMZN"
      },
      {
        "description": "",
        "proName": "NASDAQ:NFLX"
      },
      {
        "description": "",
        "proName": "NYSE:SQ"
      },
      {
        "description": "",
        "proName": "AMEX:GLD"
      },
      {
        "description": "",
        "proName": "NYMEX:CL1!"
      }
  ],
  "colorTheme": "dark",
  "isTransparent": false,
  "displayMode": "adaptive",
  "locale": "en"
}
  </script>
</div>
    `
    return iframeContent
  }
  return (
    <div>
      <InnerHTML html={content()} />
    </div>
  )
}

export default Widget
