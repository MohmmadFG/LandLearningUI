import { styled } from "@/shared/styles/stitches.config";
import ReactPlayer from "react-player";
import { useSearchParams } from "react-router-dom";
import { useConfirmApi } from "../hook/useConfirmEmailApi";
import { Player } from "@lottiefiles/react-lottie-player";
import ButtonComponent from "@/shared/components/ButtonComponent";
const PageWrapper = styled("div", {
  position: "relative",
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const BackgroundVideo = styled("div", {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 0,
  "& video": {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  },
});

const Content = styled("div", {
  width: "542px",
  height: "204px",
  color: "#0188ff",
  position: "relative",
  zIndex: 1,
  textAlign: "center",
  backgroundColor: "rgb(28 53 72 / 0%)",
  fontFamily: "$body",
  padding: "$formPadding",
  borderRadius: "$container",
  fontSize: "39px",
  boxShadow: "6px 22px 41px 45px rgba(0, 0, 0, 0.25);",
  display: "flex",
  flexDirection: "column",
  letterSpacing: "0.7px",
  textTransform: "lowercase",
});

export default function EmailConfirmationPage() {
  const [searchParams] = useSearchParams();
  const userid = searchParams.get("userid") || "";
  const token = searchParams.get("token") || "";
  const { loading, response } = useConfirmApi({
    userId: userid,
    token: token,
  });
  return (
    <PageWrapper>
      <BackgroundVideo>
        <ReactPlayer
          src="/142815-780943566_small.mp4"
          playing
          loop
          muted
          width="100%"
          height="100%"
          style={{ position: "absolute", top: 0, left: 0 }}
        />
      </BackgroundVideo>

      <Content>
        <div>
          {loading && (
            <h1
              className="text-[#5f9ea0fa] text-[36px] "
              style={{
                color: "#a6fcfffa",
                fontFamily: "Yanone Kaffeesatz",
              }}
            >
              Processing stage
            </h1>
          )}
          {response && (
            <h1
              className="text-green-500"
              style={{
                fontSize: "28px",
                fontFamily: "Yanone Kaffeesatz",
              }}
            >
              The email has been successfully verified.
            </h1>
          )}
          {!response && !loading && (
            <h1 className="text-red-800 "> not valid Email</h1>
          )}
        </div>
        {loading && (
          <Player
            style={{
              width: "188px",
              height: "78px",
            }}
            speed={2}
            autoplay={true}
            src={"/Insider-loading (1).json"}
            loop={true}
          />
        )}
        {response && (
          <ButtonComponent
            labelName="home Page"
            height="54px"
            width="164px"
            color="lavenderblush"
            withIcon={true}
            srcIcon="/icons8-home-64.svg"
            bottomImg="4px"
            rightImg="4px"
            positionImg="relative"
          ></ButtonComponent>
        )}
      </Content>
    </PageWrapper>
  );
}
