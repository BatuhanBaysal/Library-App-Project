import { Carousel } from "./components/Carousel";
import { ExplorerTopBooks } from "./components/ExploreTopBooks";
import { Heros } from "./components/Heros";
import { LibraryServices } from "./components/LibraryServices";

export const HomePage = () => {
    return (
        <div>
            <ExplorerTopBooks />
            <Carousel />
            <Heros />
            <LibraryServices />
        </div>
    );
}