// package com.pokemonreview.api.config;

// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.web.servlet.config.annotation.CorsRegistry;
// import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// @Configuration
// public class WebConfig implements WebMvcConfigurer {

//     @Override
//     public void addCorsMappings(CorsRegistry registry) {
//         registry.addMapping("/**") // Allow all endpoints
//                 .allowedOrigins("http://localhost:5500") // Replace with the URL where your frontend is hosted
//                 .allowedMethods("GET", "POST", "PUT", "DELETE");
//     }
// }


package com.pokemonreview.api.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")  // Allow all endpoints
                .allowedOrigins("http://127.0.0.1:5500")  // Replace with your frontend URL
                .allowedMethods("GET", "POST", "PUT", "DELETE")  // Allow GET, POST, PUT, DELETE methods
                .allowedHeaders("*")  // Allow all headers (useful for Authorization headers, etc.)
                .allowCredentials(true)  // Allow credentials (cookies, authorization headers)
                .maxAge(3600);  // Cache preflight request for 1 hour
    }
}
