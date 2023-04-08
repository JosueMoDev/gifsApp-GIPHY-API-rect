import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { useSetUi } from "/src/hooks";
import { IconButton } from "@mui/material";

export const CopyEmbedButton = ({ itemData }) => {
  const { startCopyLink, isLinkCopid } = useSetUi();

  return (
    <div>
      <CopyToClipboard
        text={`
        <iframe src="https://giphy.com/embed/${itemData.id}" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen>
        </iframe>
        <p><a href="https://giphy.com/gifs/${itemData.slug}">via GIPHY</a></p>
        `}
        onCopy={() => !isLinkCopid && startCopyLink()}
      >
        <IconButton>
          <FontAwesomeIcon
            className="text-white"
            fontSize={"1.5rem"}
            icon={faCode}
          />
        </IconButton>
      </CopyToClipboard>
    </div>
  );
};
