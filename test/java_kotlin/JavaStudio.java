package test.java_kotlin;

import com.adityadivte.webecon.Webecon;
import javax.swing.*;
import java.awt.*;
import java.io.File;
import java.io.FileWriter;
import java.net.URI;

/**
 * Java Native Studio - v17.2 PRO
 * A professional Swing interface to demonstrate Webecon Icon integration.
 */
public class JavaStudio {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Webecon Icon Studio - Java Native");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(450, 550);
        frame.getContentPane().setBackground(new Color(15, 23, 42));
        frame.setLayout(new GridBagLayout());
        GridBagConstraints gbc = new GridBagConstraints();
        gbc.insets = new Insets(10, 10, 10, 10);
        gbc.fill = GridBagConstraints.HORIZONTAL;

        JLabel title = new JLabel("WEBECON ICON ENGINE", SwingConstants.CENTER);
        title.setFont(new Font("Arial", Font.BOLD, 20));
        title.setForeground(new Color(99, 102, 241));
        gbc.gridx = 0;
        gbc.gridy = 0;
        gbc.gridwidth = 2;
        frame.add(title, gbc);

        // Icon Selector
        gbc.gridwidth = 1;
        gbc.gridy++;
        JLabel iconLabel = new JLabel("Icon Name:");
        iconLabel.setForeground(Color.WHITE);
        frame.add(iconLabel, gbc);

        JTextField iconField = new JTextField("activity");
        gbc.gridx = 1;
        frame.add(iconField, gbc);

        // Color Selector
        gbc.gridx = 0;
        gbc.gridy++;
        JLabel colorLabel = new JLabel("Color Hex:");
        colorLabel.setForeground(Color.WHITE);
        frame.add(colorLabel, gbc);

        JTextField colorField = new JTextField("#6366f1");
        gbc.gridx = 1;
        frame.add(colorField, gbc);

        // Theme Selector
        gbc.gridx = 0;
        gbc.gridy++;
        JLabel themeLabel = new JLabel("Theme:");
        themeLabel.setForeground(Color.WHITE);
        frame.add(themeLabel, gbc);

        String[] themes = { "line", "duo", "glass", "neon", "3d" };
        JComboBox<String> themeBox = new JComboBox<>(themes);
        themeBox.setSelectedItem("glass");
        gbc.gridx = 1;
        frame.add(themeBox, gbc);

        // Stroke Selector
        gbc.gridx = 0;
        gbc.gridy++;
        JLabel strokeLabel = new JLabel("Stroke:");
        strokeLabel.setForeground(Color.WHITE);
        frame.add(strokeLabel, gbc);

        JTextField strokeField = new JTextField("2.0");
        gbc.gridx = 1;
        frame.add(strokeField, gbc);

        // Secondary Color Selector
        gbc.gridx = 0;
        gbc.gridy++;
        JLabel secondaryLabel = new JLabel("Secondary Hex:");
        secondaryLabel.setForeground(Color.WHITE);
        frame.add(secondaryLabel, gbc);

        JTextField secondaryField = new JTextField("none");
        gbc.gridx = 1;
        frame.add(secondaryField, gbc);

        // Secondary Opacity
        gbc.gridx = 0;
        gbc.gridy++;
        JLabel opacityLabel = new JLabel("Sec. Opacity:");
        opacityLabel.setForeground(Color.WHITE);
        frame.add(opacityLabel, gbc);

        JTextField opacityField = new JTextField("0.35");
        gbc.gridx = 1;
        frame.add(opacityField, gbc);

        // Preview Button
        JButton previewBtn = new JButton("PRO PREVIEW");
        previewBtn.setBackground(new Color(99, 102, 241));
        previewBtn.setForeground(Color.WHITE);
        previewBtn.setFocusPainted(false);
        previewBtn.setFont(new Font("Arial", Font.BOLD, 14));

        gbc.gridx = 0;
        gbc.gridy++;
        gbc.gridwidth = 2;
        gbc.ipady = 15;
        frame.add(previewBtn, gbc);

        previewBtn.addActionListener(e -> {
            try {
                String name = iconField.getText();
                String color = colorField.getText();
                String secondary = secondaryField.getText();
                double opacity = Double.parseDouble(opacityField.getText());
                String theme = (String) themeBox.getSelectedItem();
                double stroke = Double.parseDouble(strokeField.getText());

                // Generate the SDK tag using natural fluent syntax
                String tag = Webecon.icon(name)
                        .size(200)
                        .stroke(stroke)
                        .color(color)
                        .secondaryColor(secondary)
                        .secondaryOpacity(opacity)
                        .theme(theme)
                        .animation("pulse")
                        .animation("infinite")
                        .build();

                // Create preview file
                File previewFile = new File("java_preview.html");
                String rootPath = new File(".").getAbsolutePath().replace("\\", "/");
                if (rootPath.endsWith("/."))
                    rootPath = rootPath.substring(0, rootPath.length() - 2);

                String html = "<html><body style='background:#0f172a; display:flex; align-items:center; justify-content:center; height:100vh;'>"
                        +
                        "<script src='file:///" + rootPath + "/dist/webicons.js'></script>" +
                        tag + "</body></html>";

                FileWriter writer = new FileWriter(previewFile);
                writer.write(html);
                writer.close();

                Desktop.getDesktop().browse(previewFile.toURI());
            } catch (Exception ex) {
                JOptionPane.showMessageDialog(frame, "Error generating preview: " + ex.getMessage());
            }
        });

        frame.setLocationRelativeTo(null);
        frame.setVisible(true);
    }
}
