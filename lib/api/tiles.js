import api from "./api";


const TileAPI = {
    getRecipes: async () => {
        return await api.get(`/recipes/`);
    },
    getProjects: async () => {
        return await api.get(`/projects/`);
    }
}

export default TileAPI