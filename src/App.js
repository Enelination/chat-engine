import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";

import "./App.css";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="d701df64-70f8-44a1-b5b8-816d8b3f57fa"
      userName="Enel"
      userSecret="123123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
