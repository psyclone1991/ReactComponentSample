

const API = 'https://virtserver.swaggerhub.com/psyclone1991/cobol-colleague_representation/1.1/projects/';
export async function availableProjects() {
  const response = await fetch(API);
  return response.json();
} 