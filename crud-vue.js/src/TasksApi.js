import axios from 'axios'

export default {
  getTasks: (callback) => {
    axios.get('http://localhost:8081/tasks/').then((response) => {
      callback(response.data)
    })
  },
  getTask: (taskId, callback) => {
    axios.get(`http://localhost:8081/tasks/${taskId}`).then((response) => {
      callback(response.data)
    })
  },
  createTask: (task, callback) => {
    axios.post('http://localhost:8081/tasks/', task).then((response) => {
      callback(response.data)
    })
  },
  updateTasks: (task, callback) => {
    axios
      .patch(`http://localhost:8081/tasks/${task.id}`, task)
      .then((response) => {
        callback(response.data)
      })
  },
  deleteTasks: (taskId, callback) => {
    axios.delete(`http://localhost:8081/tasks/${taskId}`).then((response) => {
      callback(response.data)
    })
  },
}