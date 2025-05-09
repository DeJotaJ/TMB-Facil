import { useEffect } from "react";

const AdComponent = () => {
  useEffect(() => {
    try {
      if (window.adsbygoogle && Array.isArray(window.adsbygoogle)) {
        window.adsbygoogle.push({});
      }
    } catch (e) {
      console.error("AdSense error", e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
      data-ad-slot="1234567890"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default AdComponent;
