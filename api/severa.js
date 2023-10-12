```javascript
class SeveraAPI {
  constructor() {
    this.baseUrl = 'https://severa.visma.com/api/v1/';
  }

  async login(username, password) {
    const response = await fetch(this.baseUrl + 'login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    if (!response.ok) {
      throw new Error('Failed to login');
    }

    const data = await response.json();
    return data;
  }

  async getProjects(token) {
    const response = await fetch(this.baseUrl + 'projects', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Failed to get projects');
    }

    const data = await response.json();
    return data;
  }

  async logHours(token, projectId, hours) {
    const response = await fetch(this.baseUrl + 'hours', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ projectId, hours })
    });

    if (!response.ok) {
      throw new Error('Failed to log hours');
    }

    const data = await response.json();
    return data;
  }
}

export const severaAPI = new SeveraAPI();
```