export default function dateFormat(timestamp) {
    const options = { year: 'numeric', month: '2-digit', 
                    day: '2-digit', hour: '2-digit', minute:'2-digit', second: '2-digit'};
    return new Date(timestamp).toLocaleDateString('pt-BR', options);
}