import SwiftUI
import Webecon

/**
 * SwiftUI Showcase View for Webecon Icons.
 */
struct IconShowcaseView: View {
    var body: some View {
        VStack(spacing: 30) {
            Text("Webecon iOS Showcase")
                .font(.largeTitle)
                .fontWeight(.bold)
            
            HStack(spacing: 20) {
                WebeconIcon(
                    name: "heart",
                    size: 64,
                    color: .red,
                    theme: "neon",
                    animation: "heartbeat"
                )
                
                WebeconIcon(
                    name: "activity",
                    size: 64,
                    color: .blue,
                    theme: "glass",
                    animation: "pulse"
                )
            }
            
            Text("Status: Final 17.2 PRO Assets Linked")
                .font(.caption)
                .foregroundColor(.gray)
        }
        .preferredColorScheme(.dark)
    }
}
