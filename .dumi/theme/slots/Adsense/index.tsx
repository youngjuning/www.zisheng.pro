import React, { useEffect } from 'react';

const Adsense: React.FC<any> = (props) => {
  useEffect(() => {
    try {
      // @ts-ignore
      (adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.info('谷歌广告加载异常', error);
    }
  }, [])

  return (
    <>
      <div style={{ width: "100%" }}>
        <center>
          <ins {...props} />
        </center>
      </div>
    </>
  );
}

export default Adsense
