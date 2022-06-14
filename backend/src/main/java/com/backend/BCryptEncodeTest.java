package com.backend;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BCryptEncodeTest {
    public static void main(String[] args) {
        BCryptPasswordEncoder encodePassword = new BCryptPasswordEncoder();

        for(int i=1; i<=10; i++){
            String passwordEncoded = encodePassword.encode("loredana");
            System.out.println("The encoded password is: " + passwordEncoded);
        }
    }
}
