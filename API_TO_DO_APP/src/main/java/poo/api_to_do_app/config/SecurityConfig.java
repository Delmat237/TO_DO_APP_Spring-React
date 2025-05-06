package poo.api_to_do_app.config;

import org.springframework.http.HttpMethod;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import static org.springframework.security.config.Customizer.withDefaults;
// import org.springframework.security.core.userdetails.UserDetailsService;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .cors() // active la config CORS définie dans WebConfig
            .and()
            .authorizeHttpRequests(auth -> auth
                .requestMatchers(
                    "/api/auth/signup", 
                    "/api/users",
                    "/swagger-ui/**",
                    "/swagger-ui.html",
                    "/v3/api-docs/**",
                    "/swagger-resources/**",
                    "/webjars/**"
                ).permitAll()
                .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll() // autorise OPTIONS sans auth
                .anyRequest().authenticated()
            )
            .httpBasic(withDefaults())
            .formLogin(form -> form.permitAll())
            .logout(logout -> logout.permitAll())
            .csrf(csrf -> csrf.disable());

        return http.build();
    }
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}

//     @Bean
//     public UserDetailsService userDetailsService(UserRepository userRepository) {
//         return new CustomUserDetailsService(userRepository);
//     }
// }
