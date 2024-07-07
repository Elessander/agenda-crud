import api from "./Api";

export default async function Login(username: any, password: any) {
    try {
        const data = { username, password };
        const response: any = await api.post("/login", data);
        return response.data.auth === 'true';
    } catch {
        alert("Falha na conexão com o servidor remoto.");
        return false;
    }
}

export async function getAllRegs() {
    try {
        const response = await api.get("/getAllAgendas");
        return response.data;
    } catch (error) {
        alert("Falha ao buscar contatos: " + error);
    }
}

export async function addContact(contact: any) {
    try {
        const response = await api.post("/addAgenda", contact);
        return response.data;
    } catch (error) {
        alert("Falha ao adicionar contato: " + error);
    }
}

export async function updateContact(contact: any) {
    try {
        const response = await api.put("/updAgenda", contact);
        return response.data;
    } catch (error) {
        alert("Falha ao atualizar contato: " + error);
    }
}

export async function deleteContact(id: any) {
    try {
        await api.delete(`/delAgenda/${id}`);
        alert("Contato excluído com sucesso.");
    } catch (error) {
        alert("Falha ao excluir contato: " + error);
    }
}