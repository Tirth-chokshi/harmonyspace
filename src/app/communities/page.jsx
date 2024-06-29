// pages/index.jsx
import CreateCommunityForm from "@/components/ui/CreateCommunityForm";
import CommunityList from "@/components/ui/CommunityList";


const Home = () => {
    return (
        <div>
            <h1>Welcome to Harmonyspace</h1>
            <CreateCommunityForm />
            <CommunityList />
        </div>
    );
};

export default Home;