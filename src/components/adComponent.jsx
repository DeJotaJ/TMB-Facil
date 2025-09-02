import { useEffect } from "react";

const AdComponent = () => {
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
        style={{ display: "block", minHeight: "250px" }}
        data-ad-client="ca-pub-9635044097775147"
        data-ad-slot="8088423058"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </>
  );
};

export default AdComponent;
