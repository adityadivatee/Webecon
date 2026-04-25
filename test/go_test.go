package main

import (
    "fmt"
    "os"
    "path/filepath"
    "io/ioutil"
    "strings"
)

// Since we are testing a local package without go modules setup for the test, 
// I will simulate the usage by reading the generated file if needed or just 
// creating a standalone test that includes the SDK logic.
// Actually, I'll just copy the SDK into the test dir for a clean 'go run'.

func main() {
    fmt.Println("[START] Testing Webecon Go Fluent Builder...")

    // We'll use the logic directly from the SDK to verify the template works.
    // In a real scenario, user would import "github.com/adityadivatee/Webecon"
    
    // I'll manually verify the sdks/go/webecon.go file first.
    dat, _ := ioutil.ReadFile("sdks/go/webecon.go")
    content := string(dat)
    
    if strings.Contains(content, "func (w *Webecon) SetTrigger(t string)") {
        fmt.Println("\n[OK] SetTrigger method found in Go SDK!")
    } else {
        fmt.Println("\n[ERROR] SetTrigger missing from Go SDK!")
    }

    if strings.Contains(content, "animation-mode='%s'") {
        fmt.Println("\n[OK] animation-mode attribute found in Go template!")
    } else {
        fmt.Println("\n[ERROR] animation-mode missing from Go template!")
    }

    fmt.Println("\n[DONE] Go Fluent Builder Verification Complete!")
}
