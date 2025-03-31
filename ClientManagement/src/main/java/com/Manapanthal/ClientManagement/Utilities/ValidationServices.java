package com.Manapanthal.ClientManagement.Utilities;

import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

@Getter
@Component
@PropertySource("classpath:validationCodesMessages.properties")
public class ValidationServices {


    //Common Validation
    @Value("${code.success.common}")
    private String commonSuccessCode;
    @Value("${code.failure.common}")
    private String failureCode;
    @Value("${code.nullValues.received}")
    private String NullValuesCode;
    @Value("${code.failure.file}")
    private String fileFailureCode;

    //Client Validation
    @Value("${message.client.save}")
    private String clientSaveMessage;
    @Value("${message.client.update}")
    private String clientUpdateMessage;
    @Value("${message.client.delete}")
    private String clientDeleteMessage;
    @Value("${message.client.get}")
    private String clientGetMessage;
    @Value("${message.client.ClientIdNotFound}")
    private String ClientIdNotFoundMessage;
    @Value("${message.client.MobileAlreadyExists}")
    private String MobileAlreadyExistsMessage;

    //Photography Validation
    @Value("${message.photography.save}")
    private String photographySaveMessage;
    @Value("${message.photography.update}")
    private String photographyUpdateMessage;
    @Value("${message.photography.delete}")
    private String photographyDeleteMessage;
    @Value("${message.photography.get}")
    private String photographyGetMessage;
    @Value("${message.photography.IdNotFound}")
    private String photographyIdNotFoundMessage;
    @Value("${message.photography.MobileAlreadyExists}")
    private String PhotographyMobileAlreadyExists;

    //Photography Validation
    @Value("${message.photography.save}")
    private String weddingHallSaveMessage;
    @Value("${message.photography.update}")
    private String weddingHallUpdateMessage;
    @Value("${message.photography.delete}")
    private String weddingHallDeleteMessage;
    @Value("${message.photography.get}")
    private String weddingHallGetMessage;
    @Value("${message.photography.IdNotFound}")
    private String weddingHallIdNotFoundMessage;
    @Value("${message.photography.MobileAlreadyExists}")
    private String weddingHallMobileAlreadyExistsMessage;

}
