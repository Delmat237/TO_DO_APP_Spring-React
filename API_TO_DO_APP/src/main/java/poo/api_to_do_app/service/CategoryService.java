package poo.api_to_do_app.service;

import poo.api_to_do_app.model.Category;
import poo.api_to_do_app.repository.CategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {
    private final CategoryRepository repo;

    public CategoryService(CategoryRepository repo) {
        this.repo = repo;
    }

    public Category createCategory(Category category) {
        return repo.save(category);
    }

    public List<Category> getAllCategories() {
        return repo.findAll();
    }

    public Optional<Category> getCategoryById(Long id) {
        return repo.findById(id);
    }

    public Category updateCategory(Long id, Category categoryDetails) {
        Category category = repo.findById(id).orElseThrow(() -> new RuntimeException("Category not found"));
        category.setName(categoryDetails.getName());
        return repo.save(category);
    }

    public void deleteCategory(Long id) {
        repo.deleteById(id);
    }
}
