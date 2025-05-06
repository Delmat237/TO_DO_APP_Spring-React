package poo.api_to_do_app.service;

import poo.api_to_do_app.model.Task;
import poo.api_to_do_app.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {
    private final TaskRepository repo;

    public TaskService(TaskRepository repo) {
        this.repo = repo;
    }

    public Task createTask(Task task) {
        return repo.save(task);
    }

    public List<Task> getAllTasks() {
        return repo.findAll();
    }

    public Optional<Task> getTaskById(Long id) {
        return repo.findById(id);
    }

    public Task updateTask(Long id, Task taskDetails) {
        Task task = repo.findById(id).orElseThrow(() -> new RuntimeException("Task not found"));
        task.setTitle(taskDetails.getTitle());
        task.setDescription(taskDetails.getDescription());
        task.setCompleted(taskDetails.isCompleted());
        task.setUser(taskDetails.getUser());
        task.setCategory(taskDetails.getCategory());
        return repo.save(task);
    }

    public void deleteTask(Long id) {
        repo.deleteById(id);
    }
}
