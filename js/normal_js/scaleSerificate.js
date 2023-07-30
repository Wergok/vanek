class ScaleSertificates {
   constructor(elementsSelector) {
      this.certificates = Array.from(
         document.querySelectorAll(elementsSelector)
      );
   }

   getPathImages(id) {
      return document.getElementById(id).getAttribute("src");
   }

   getImage(element) {
      return element.querySelector(".certificates__image");
   }

   click(element) {
      const path = this.getPathImages(
         this.getImage(element).getAttribute("id")
      );
      showCertificatePopup(path, certificatePopup);
   }

   init() {
      document
         .querySelector(".popup-certificates__close-button")
         .addEventListener("click", () => {
            hideCertificatePopup(certificatePopup);
         });
      this.certificates.forEach((element) => {
         element.addEventListener("click", () => {this.click(element)});
      });
   }
}

const certificatePopup = document.querySelector(".popup-certificates");

const showCertificatePopup = (path, popup) => {
   const certificateImage = popup.querySelector(".popup-certificates__image");
   certificateImage.setAttribute("src", path);

   popup.classList.add("popupActive");
};

const hideCertificatePopup = (popup) => {
   popup.classList.remove("popupActive");
};

new ScaleSertificates(".certificates__swiper-slide").init();
