
  document.addEventListener("alpine:init", () => {
    Alpine.data("imageSlider", () => ({
      currentIndex: 1,
      images: [
        "https://media.istockphoto.com/id/1480281331/pt/foto/young-black-female-working-on-laptop-computer-in-creative-office-in-the-evening-happy.webp?s=1024x1024&w=is&k=20&c=hIb47JrFi0ONOxgCP0aWzHECZBrF8YgpjQXsH1p3hNM=",
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1420&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://media.istockphoto.com/id/1435220822/pt/foto/african-american-software-developer.jpg?s=1024x1024&w=is&k=20&c=MM2h3jPN_7M0_0QAvkrFN6CzqaWffyus2ZKQLL-JLPc=",
      ],
      previous() {
        if (this.currentIndex > 1) {
          this.currentIndex = this.currentIndex - 1;
        }
      },
      forward() {
        if (this.currentIndex < this.images.length) {
          this.currentIndex = this.currentIndex + 1;
        }
      },
    }));
  });
