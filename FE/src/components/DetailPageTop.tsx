import { useNavigate } from "react-router-dom";
import style from "../styles/css/DetailPageTop.module.css";
import { Icon } from "@iconify/react";

interface DetailTopProps {
  data: {
    companyId: number;
    name: string;
    profileImg?: string;
    thumbnail?: string | null;
    title?: string;
  };
}

const DetailPageTop = (props: DetailTopProps) => {
  const { data } = props;

  const companyId = data.companyId;

  const navigate = useNavigate();

  const handleGoList = () => {
    navigate("/list");
  };
  const handleGoCompany = () => {
    if (companyId) {
      navigate(`/company/detail/${companyId}`);
    }
  };

  const totalStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(${data.thumbnail})`,
  };

  return (
    <div className={style.total} style={totalStyle}>
      <Icon
        icon="bi:chevron-left"
        className={style.icon}
        width="2rem"
        onClick={handleGoList}
      />
      <div className={style.topcontent}>
        <div className={style.upsection}>
          {data.title && <div className={style.fundingtitle}>{data.title}</div>}
        </div>
        <div className={style.downsection}>
          <img
            src={data.profileImg}
            alt="Company Logo"
            className={style.downimg}
          />
          <div className={style.companyname} onClick={handleGoCompany}>
            {data.name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPageTop;
