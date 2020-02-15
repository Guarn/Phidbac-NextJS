import * as S from "./Styled";
import React, { isValidElement, useState } from "react";
import Icon, { IconList } from "../Icons";

export interface indexI {
  defaultTab?: string;
}

type IPanel<P> = React.FunctionComponent<P> & {
  Tabs: typeof Tabs;
};

const index: IPanel<indexI> = ({ defaultTab, children }) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTab || "NoDefault");
  let TabActive;
  return (
    <S.MenuSlide>
      <S.Titres>
        {React.Children.map(children, (child, index) => {
          if (isValidElement(child)) {
            if (activeTab === "NoDefault" && index === 0) {
              setActiveTab(child.key as string);
            }
            if (activeTab === child.key) {
              TabActive = child;
            }
            return (
              <S.Titre
                onClick={() => {
                  setActiveTab(child.key as string);
                }}
                key={index}
                actif={child.key === activeTab}
              >
                {child.props.icon && <Icon type={child.props.icon} />}
                {child.props.title}
              </S.Titre>
            );
          }
        })}
      </S.Titres>
      {TabActive}
    </S.MenuSlide>
  );
};

export interface TabsI {
  title: string;
  icon?: typeof IconList[number];
}

const Tabs: React.FC<TabsI> = props => {
  return <div>{props.children}</div>;
};

index.Tabs = Tabs;
export default index;
