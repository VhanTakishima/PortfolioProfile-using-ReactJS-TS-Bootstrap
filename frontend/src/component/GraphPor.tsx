/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Modal, Button, Image } from "react-bootstrap";

import "../styling/GraphPor.css";

type GraphPorProps = {
  isVisible: boolean;
  onClose: () => void;
};

function GraphPor({ isVisible, onClose }: GraphPorProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <form className={isVisible ? "" : "hidden"}>
        <div className="graphpordisplay col">
          <div className="row">
            <div className="col-1">
              <Button variant="primary" onClick={onClose}>
                X
              </Button>
            </div>
          </div>

          <div className="galleryarea">
            <div className="row pt-3">
              These section is my previous work for the players who hired me in
              the game Torn.com
            </div>

            <div className="row pt-3 align-content-center">
              <img
                src="https://i.ibb.co/vkYMTQG/profile-signe-vhan.gif"
                className="img-fluid rounded float-start col-6"
                alt=""
                onClick={() =>
                  handleImageClick(
                    "https://i.ibb.co/vkYMTQG/profile-signe-vhan.gif"
                  )
                }
              />
              <img
                src="https://i.ibb.co/G0rK7CT/proudmember-FINAL.gif"
                className="img-fluid rounded float-start col-6"
                alt=""
                onClick={() =>
                  handleImageClick(
                    "https://i.ibb.co/G0rK7CT/proudmember-FINAL.gif"
                  )
                }
              />
            </div>
            <div className="row pt-3 align-content-center">
              <img
                src="https://i.ibb.co/Xxs03hH/Landscape-final.gif"
                className="img-fluid rounded float-start col-3"
                alt=""
                onClick={() =>
                  handleImageClick(
                    "https://i.ibb.co/Xxs03hH/Landscape-final.gif"
                  )
                }
              />
              <img
                src="https://i.ibb.co/ZJg5H8G/finasl-1.gif"
                className="img-fluid rounded float-start col-5"
                alt=""
                onClick={() =>
                  handleImageClick("https://i.ibb.co/ZJg5H8G/finasl-1.gif")
                }
              />
              <img
                src="https://i.ibb.co/WV1jgdP/ssdd.gif"
                className="img-fluid rounded float-start col-4"
                alt=""
                onClick={() =>
                  handleImageClick("https://i.ibb.co/WV1jgdP/ssdd.gif")
                }
              />
            </div>
            <div className="row pt-3 align-content-center">
              <img
                src="https://i.ibb.co/5TBMQgM/REDID-1.gif"
                className="img-fluid rounded float-start col-3"
                alt=""
                onClick={() =>
                  handleImageClick("https://i.ibb.co/5TBMQgM/REDID-1.gif")
                }
              />
              <img
                src="https://i.ibb.co/3fTcMtJ/final.gif"
                className="img-fluid rounded float-start col-3"
                alt=""
                onClick={() =>
                  handleImageClick("https://i.ibb.co/3fTcMtJ/final.gif")
                }
              />
              <img
                src="https://i.ibb.co/M7HkvTJ/optimized-watermarked.gif"
                className="img-fluid rounded float-start col-3"
                alt=""
                onClick={() =>
                  handleImageClick(
                    "https://i.ibb.co/M7HkvTJ/optimized-watermarked.gif"
                  )
                }
              />
              <img
                src="https://i.ibb.co/MZGwjKX/Animated-w-watermark.gif"
                className="img-fluid rounded float-start col-3"
                alt=""
                onClick={() =>
                  handleImageClick(
                    "https://i.ibb.co/MZGwjKX/Animated-w-watermark.gif"
                  )
                }
              />
            </div>
            <div className="row pt-3 align-content-center">
              <img
                src="https://i.ibb.co/vxvTjNV/Browser-Preview-tmp.gif"
                className="img-fluid rounded float-start col-3"
                alt=""
                onClick={() =>
                  handleImageClick(
                    "https://i.ibb.co/vxvTjNV/Browser-Preview-tmp.gif"
                  )
                }
              />
              <img
                src="https://i.ibb.co/xhryTqv/neonwith-watermark2.gif"
                className="img-fluid rounded float-start col-3"
                alt=""
                onClick={() =>
                  handleImageClick(
                    "https://i.ibb.co/xhryTqv/neonwith-watermark2.gif"
                  )
                }
              />
              <img
                src="https://i.ibb.co/Czq2nqv/PREVIEW.gif"
                className="img-fluid rounded float-start col-3"
                alt=""
                onClick={() =>
                  handleImageClick("https://i.ibb.co/Czq2nqv/PREVIEW.gif")
                }
              />
              <img
                src="https://i.ibb.co/q5R4bRY/Final.gif"
                className="img-fluid rounded float-start col-3"
                alt="https://i.ibb.co/LR5DZnC/with-watermark.gif"
                onClick={() =>
                  handleImageClick("https://i.ibb.co/q5R4bRY/Final.gif")
                }
              />
            </div>
            <div className="row pt-3 align-content-center">
              <img
                src="https://i.ibb.co/2kBKGTm/wip.gif"
                className="img-fluid rounded float-start col-3"
                alt=""
                onClick={() =>
                  handleImageClick("https://i.ibb.co/2kBKGTm/wip.gif")
                }
              />
              <img
                src="https://i.ibb.co/WkSBwV8/Final-nbanner.gif"
                className="img-fluid rounded float-start col-3"
                alt=""
                onClick={() =>
                  handleImageClick("https://i.ibb.co/WkSBwV8/Final-nbanner.gif")
                }
              />
              <img
                src="https://i.ibb.co/Xk51jRT/profile-sig.png"
                className="img-fluid rounded float-start col-6"
                alt=""
                onClick={() =>
                  handleImageClick("https://i.ibb.co/Xk51jRT/profile-sig.png")
                }
              />
            </div>
            <div className="row pt-3 align-content-center">
              <img
                src="https://i.ibb.co/Zf34K7s/Final.gif"
                className="img-fluid rounded float-start col-3"
                alt=""
                onClick={() =>
                  handleImageClick("https://i.ibb.co/Zf34K7s/Final.gif")
                }
              />
              <img
                src="https://i.ibb.co/sJv6F10/resized-final.gif"
                className="img-fluid rounded float-start col-3"
                alt=""
                onClick={() =>
                  handleImageClick("https://i.ibb.co/sJv6F10/resized-final.gif")
                }
              />
              <img
                src="https://i.ibb.co/pz95WxG/watermarked-2.gif"
                className="img-fluid rounded float-start col-3"
                alt=""
                onClick={() =>
                  handleImageClick("https://i.ibb.co/pz95WxG/watermarked-2.gif")
                }
              />
              <img
                src="https://i.ibb.co/4JpkskC/MHC-Main-1.gif"
                className="img-fluid rounded float-start col-3"
                alt=""
                onClick={() =>
                  handleImageClick("https://i.ibb.co/4JpkskC/MHC-Main-1.gif")
                }
              />
            </div>
          </div>
        </div>

        <Modal show={!!selectedImage} onHide={closeModal} centered>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            {selectedImage && (
              <Image
                className=" modalimg"
                src={selectedImage}
                alt="Fullscreen"
                fluid
              />
            )}
          </Modal.Body>
        </Modal>
      </form>
    </>
  );
}

export default GraphPor;
