package com.ecommerce.srv.config;

import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Configuration
@PropertySource(value="${entitlement.credencial.file.path}",ignoreResourceNotFound = false)
@Getter
public class EntitlementConfig {
    @Value("${entitlement.rw.resourses}")
    private String rwResourses;
}
