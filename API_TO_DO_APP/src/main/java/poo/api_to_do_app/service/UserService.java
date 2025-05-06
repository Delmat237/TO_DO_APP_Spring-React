package poo.api_to_do_app.service;

import poo.api_to_do_app.model.User;
import poo.api_to_do_app.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository repo;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository repo, PasswordEncoder passwordEncoder) {
        this.repo = repo;
        this.passwordEncoder = passwordEncoder;
    }

    // Crée un utilisateur en encodant le mot de passe
    public User createUser(User user) {
        if (repo.findByUsername(user.getUsername()).isPresent()) {
            throw new RuntimeException("Utilisateur déjà existant");
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return repo.save(user);
    }

    public List<User> getAllUsers() {
        return repo.findAll();
    }

    public Optional<User> getUserById(Long id) {
        return repo.findById(id);
    }

    // Met à jour un utilisateur, encode le mot de passe si modifié
    public User updateUser(Long id, User userDetails) {
        User user = repo.findById(id).orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
        user.setUsername(userDetails.getUsername());

        // Si le mot de passe est modifié, encode-le
        if (userDetails.getPassword() != null && !userDetails.getPassword().isEmpty()) {
            user.setPassword(passwordEncoder.encode(userDetails.getPassword()));
        }

        return repo.save(user);
    }

    public void deleteUser(Long id) {
        repo.deleteById(id);
    }
}
