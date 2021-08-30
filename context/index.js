import { createContext, useEffect, useState } from "react";
import { FolderIcon, HomeIcon, UsersIcon } from "@heroicons/react/outline";

export const TeamLeadContext = createContext();
export const GlobalContext = createContext();
export const AuthContext = createContext();
export const CommonContext = createContext();
export const AgentContext = createContext();

export const AgentProvider = (props) => {
  const [verifications, setVerifications] = useState([
    {
      request_number: "REQ001",
      insurance_provider: "ACA Health Benefit fund",
      vprocess: "5-10 minutes",
      status: "PENDING",
      is_new: 1,
      is_top: 1,
    },
    {
      request_number: "REQ002",
      insurance_provider: "ACA Health Benefit fund",
      vprocess: "5-10 minutes",
      status: "PENDING",
      is_new: 1,
      is_top: 0,
    },
    {
      request_number: "REQ003",
      insurance_provider: "ACA Health Benefit fund",
      vprocess: "5-10 minutes",
      status: "PENDING",
      is_new: 1,
      is_top: 0,
    },
    {
      request_number: "REQ004",
      insurance_provider: "ACA Health Benefit fund",
      vprocess: "5-10 minutes",
      status: "PENDING",
      is_new: 1,
      is_top: 0,
    },
    {
      request_number: "REQ005",
      insurance_provider: "ACA Health Benefit fund",
      vprocess: "5-10 minutes",
      status: "PENDING",
      is_new: 1,
      is_top: 0,
    },
    {
      request_number: "REQ006",
      insurance_provider: "ACA Health Benefit fund",
      vprocess: "5-10 minutes",
      status: "PENDING",
      is_new: 1,
      is_top: 0
    },
    {
      request_number: "REQ007",
      insurance_provider: "ACA Health Benefit fund",
      vprocess: "5-10 minutes",
      status: "PENDING",
      is_new: 1,
      is_top: 0,
    },
  ]);
  let topVerifications = verifications.filter(item => item.is_top === 1);
  let newVerifications = verifications.filter(item => item.is_new === 1 && item.is_top === 0);
  let data = {
    verifications,
    topVerifications,
    newVerifications,
  }
  return <AgentContext.Provider value={data}>
    {props.children}
  </AgentContext.Provider>
};

export const TeamLeadProvider = (props) => {
  const [verifications, setVerifications] = useState([
    {
      request_number: "REQ001",
      insurance_provider: "ACA Health Benefit fund",
      vprocess: "5-10 minutes",
      status: "PENDING",
    },
    {
      request_number: "REQ002",
      insurance_provider: "ACA Health Benefit fund",
      vprocess: "5-10 minutes",
      status: "ONGOING",
    },
    {
      request_number: "REQ003",
      insurance_provider: "ACA Health Benefit fund",
      vprocess: "5-10 minutes",
      status: "VERIFIED",
    },
    {
      request_number: "REQ004",
      insurance_provider: "ACA Health Benefit fund",
      vprocess: "5-10 minutes",
      status: "VERIFIED",
    },
    {
      request_number: "REQ005",
      insurance_provider: "ACA Health Benefit fund",
      vprocess: "5-10 minutes",
      status: "VERIFIED",
    },
    {
      request_number: "REQ006",
      insurance_provider: "ACA Health Benefit fund",
      vprocess: "5-10 minutes",
      status: "VERIFIED",
    },
    {
      request_number: "REQ007",
      insurance_provider: "ACA Health Benefit fund",
      vprocess: "5-10 minutes",
      status: "VERIFIED",
    },
    {
      request_number: "REQ008",
      insurance_provider: "ACA Health Benefit fund",
      vprocess: "5-10 minutes",
      status: "VERIFIED",
    },
    {
      request_number: "REQ009",
      insurance_provider: "ACA Health Benefit fund",
      vprocess: "5-10 minutes",
      status: "VERIFIED",
    },
  ]);
  const [agentList, setAgentList] = useState([
    {
      name: "Chinmay Saravati",
      status: "Available",
      date: "23 Sep 2019",
      time: "Time in 02:52PM",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Dina Glenn",
      status: "Ongoing Verification",
      date: "23 Sep 2019",
      time: "Time in 02:52PM",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      name: "Izabella Tabakova",
      status: "Ongoing Verification",
      date: "23 Sep 2019",
      time: "Time in 02:52PM",
      image:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ]);
  const [insuranceVerifications, setInsuranceVerifications] = useState([
    {
      id: "id1",
      name: "Chinmay Saravati",
      date: "23 Sep 2019",
      time: "02:52PM",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      total_unverified: 1,
      total_verified: 10,
    },
    {
      id: "id2",
      name: "Dina Glenn",
      date: "22 Sep 2019",
      time: "01:38AM",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
      total_unverified: 1,
      total_verified: 20,
    },
    {
      id: "id3",
      name: "Izabella Tabakova",
      date: "23 Sep 2019",
      time: "06:58PM",
      image:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      total_unverified: 1,
      total_verified: 30,
    },
    {
      id: "id4",
      name: "Opi Watihana",
      date: "29 Sep 2019",
      time: "02:52PM",
      image:
        "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      total_unverified: 1,
      total_verified: 20,
    },
  ]);
  return (
    <TeamLeadContext.Provider
      value={{ verifications, agentList, insuranceVerifications }}
    >
      {props.children}
    </TeamLeadContext.Provider>
  );
};

export const AuthProvider = (props) => {
  const [user, setUser] = useState(null);

  const login = (data) => {
    setUser(data);
  }
  let data = {
    user,
    login,
  };
  useEffect(() => {
    let auth = JSON.parse(localStorage.getItem("auth_login"));
    if (auth) {
      setUser(auth);
    }
  }, []);
  return (
    <AuthContext.Provider value={data}>{props.children}</AuthContext.Provider>
  );
};

export const CommonProvider = (props) => {
  const [insuranceProviders, serInsuranceProviders] = useState([
    {
      id: "p1",
      name: "ACA Healt Benefits Fund (ACA)",
      description:
        "So what are these strange lights in the sky? Are they aliens invading from Mars? Are the comets coming to start the next ice age?",
    },
    {
      id: "p2",
      name: "AIA Healt Insurance Pty Ltd",
      description:
        "So what are these strange lights in the sky? Are they aliens invading from Mars? Are the comets coming to start the next ice age?",
    },
    {
      id: "p3",
      name: "Australian Unity Health Limited",
      description:
        "So what are these strange lights in the sky? Are they aliens invading from Mars? Are the comets coming to start the next ice age?",
    },
    {
      id: "p4",
      name: "Bupa HI Pty Ltd",
      description:
        "So what are these strange lights in the sky? Are they aliens invading from Mars? Are the comets coming to start the next ice age?",
    },
    {
      id: "p5",
      name: "CBHS Corporate Health Pty Ltd",
      description:
        "So what are these strange lights in the sky? Are they aliens invading from Mars? Are the comets coming to start the next ice age?",
    },
    {
      id: "p6",
      name: "CBHS Health Fund Limited",
      description:
        "So what are these strange lights in the sky? Are they aliens invading from Mars? Are the comets coming to start the next ice age?",
    },
    {
      id: "p7",
      name: "CDH Benefits Fund",
      description:
        "So what are these strange lights in the sky? Are they aliens invading from Mars? Are the comets coming to start the next ice age?",
    },
    {
      id: "p8",
      name: "CUA Health Limited",
      description:
        "So what are these strange lights in the sky? Are they aliens invading from Mars? Are the comets coming to start the next ice age?",
    },
    {
      id: "p9",
      name: "Defence Health Limited",
      description:
        "So what are these strange lights in the sky? Are they aliens invading from Mars? Are the comets coming to start the next ice age?",
    },
  ]);
  const [selectionTypes, setSelectionTypes] = useState([
    { id: 1, name: "All List" },
    { id: 2, name: "Ongoing" },
    { id: 3, name: "Verified" },
    { id: 4, name: "Not Verified" },
    { id: 5, name: "Pending" },
  ]);
  let data = {
    insuranceProviders,
    selectionTypes,
  };
  return (
    <CommonContext.Provider value={data}>
      {props.children}
    </CommonContext.Provider>
  );
};

export const GlobalProvider = (props) => {
  const [navigation, setNavigation] = useState([
    {
      name: "Dashboard",
      href: "/",
      icon: HomeIcon,
      current: false,
      code: "dashboard",
    },
    // {
    //   name: "Verification History",
    //   href: "/verification",
    //   icon: HomeIcon,
    //   current: false,
    //   code: "verification",
    // },
    {
      name: "Agent List",
      href: "/agent",
      icon: UsersIcon,
      current: false,
      code: "agent",
    },
    {
      name: "Insurance Provider",
      href: "/insurance",
      icon: FolderIcon,
      current: false,
      code: "insurance",
    },
  ]);
  const updateActiveMenuLink = (code) => {
    const newNavigation = navigation.map((nav) => {
      return {
        ...nav,
        current: nav.code === code,
      };
    });
    setNavigation(newNavigation);
  };
  let data = {
    navigation,
    updateActiveMenuLink,
  };
  return (
    <GlobalContext.Provider value={data}>
      {props.children}
    </GlobalContext.Provider>
  );
};
