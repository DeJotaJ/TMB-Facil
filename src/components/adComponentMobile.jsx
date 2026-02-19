import { useEffect } from "react";

const AdComponentMobile = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("Adsense error", e);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {/* Primeiro anúncio mobile */}
      <ins
        className="adsbygoogle"
        style={{ display: "block", height: "50px" }}
        data-ad-client="ca-pub-9635044097775147"
        data-ad-slot="8088423058"
        data-ad-format="horizontal"
        data-full-width-responsive="true"
      ></ins>
    </>
  );
};

export default AdComponentMobile;
