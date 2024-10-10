import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-zodiac',
  standalone:true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './zodiac.component.html',
  styleUrls: ['./zodiac.component.css']
})
export class ZodiacComponent {

  personalData = {
    nombre: '',
    fechaNacimiento: new Date(),
    signo: ''
  };

  zodiacImage: string = '';

  signosZodiacalesChinos: string[] = [
    'Rata', 'Buey', 'Tigre', 'Conejo', 'Dragón', 'Serpiente', 
    'Caballo', 'Cabra', 'Mono', 'Gallo', 'Perro', 'Cerdo'
  ];

  obtenerSignoZodiacalChino(): string {
    const fecha = new Date(this.personalData.fechaNacimiento);
    const anio = fecha.getUTCFullYear();
    const signos = this.signosZodiacalesChinos;
    
    const index = (anio - 4) % 12; 
    return signos[index];
  }

  calcularSigno(): void {
    this.personalData.signo = this.obtenerSignoZodiacalChino();
    this.cargarImagenSigno(this.personalData.signo);
  }

  cargarImagenSigno(signo: string): void {
    const images = {
      'Mono': 'https://www.minutoar.com.ar/u/fotografias/m/2023/9/20/f768x1-203063_203190_102.jpg',
      'Gallo': 'https://pbs.twimg.com/media/F5dFvwhXYAICmos.jpg',
      'Perro': 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhITExITFRUWFRIVGBYWFRUVFhgWFRcWFhYVFxUYHSggGBslGxUXITEiJikrLy8uFx8zODMtNygwLisBCgoKDg0OGxAQGyslICYrLS0yLS03Li8tLS0tNS0wMC0uLS0tLS0vKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYBBAcDAv/EAEgQAAICAQEFBAUHCQYEBwAAAAECAAMRBAUGEiExE0FRYSIycYGRBxRCUqGx0RUjM1RygpKTwSRTYmOiwhay8PE0Q3ODo8Ph/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAIDBAEF/8QAKREAAwACAQMDBAEFAAAAAAAAAAECAxEhBBIxE0FRIjJxgWEUM7Hh8P/aAAwDAQACEQMRAD8A6hmMzETObjOYzMRAM5jMxEAzmMzEQDOYzMRAM5jMxEAzmMzEQDOYzMRAM5jMxEAzmMzEQDOYzMRAM5jMxEAzmMzEQDOYzMRAM5iYiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAgmRG8O3V0wVQptusyKqQcFiOrMfoIO9jKRtBzcc6qw6hv7pSyaVPIIvO32sZxvROYbL/AGba0y5B1FAIznNqcsde+RLb3CzPzPT26nu4/wBDT/Ms9Yfsgyqbv7MTV35NVS6fTMOS1ooe7HJcgZKqOZ8TidCAmPP1nY+2VyXThXuQ5t2lZ9LSafyCvew95Kj7J8fkzWn1tp2Dyr09Cj/UGP2yciYn1mV+5Ysc/BB/knV9209R76tMf/rn0NPtFPV1lNo8LdMFJ9rVuPuk1E4uryr3O9k/BDDbmsq/T6IOv19NYHPtNTgN8CZvaDefSXBit6KV9ZbPzTqfBkfBE25D7x7vVatCGVRYB+bt4QWRhzB8xnqDymjH173q0QeGWTul11Vv6O2t/wBh1b7jNich0prsyLtPWLq2KOax2NiuvIlXrxyPUe2WPZm8Vmm522NfpuWXYfn6B42Afpa/8Q5jvnoqkymsbRe4nzXYGAZSCCAQRzBB5ggz6kisREQcEREAREQBERAEREAREQBERAE1tp69NPVZdYcJWpY+7uHmTge+bMpXyg63Nmm0w6EtqHHiKiBUp8uM5/chkpW3ogTe7tZbb+muxx889mg9TTr4Ko6+LZmjtPUFKyVGWOFUeLMcAfEibeZ5bPAfWVcWeChWvbAzkr6Nagd5LsMDymeq8s1JF83e2YNLp66u9Vy7eLnm7H3kzeruVvVZW9hB+6RS7I7f09WOMnmKSc1VjwK9LG5DLNnn0wJtPsXTnBFNakdGRQjD2OuCJ5Fdre2+SfJvxPmtSAAST5nGT7cT6lR0REQDBPf3T4ruVvVZW9hB+6a+p2bXac2qLMdFbmg/c6E+ZyZ4X7A07cxUqMOj1js3X2MmD7ukmlPuznJVd9tH2Opq1A5Lf+as/wDUUZRveoI/dE1arCpyOv8A1kEd4Mn94NJZbpdRp7DxWona1PjHadmeJSQOQcEcJA5ekD34FV2fqBZWjDvA+6en09bjXwRfJZ9y9pdjb81P6KziejP/AJbrzs0+fD6a+WR3S8TkWtZlTjT16ytqeT1niHxGVPkxnVdnatbqqrV9WxEcexgD/WbJezPknXJsRESRUIiIAiIgCIiAIiIAiIgCIiAJzje8n8otnoNNVj3vZn+k6PKlvzu3ZqDXfp8G6sMhQnhFiMQcBu5geYz4mca2izG0nyVO6zhH3SU+T3QcYu1Dcw1qqvmtIPP+Nif3RIDZ+ydXqshKjWvE6NbYykKUJV8KCSxBB8p0nRaavS6dUXklSe845knzJyffPP6nIlPYvLNSR6a/aFdIy569AOZPsEiP+KUz+jbHjkZ+Eq+19p+vdaf+u5RIHZO0tXq7TXptN2hALFR1CjvLEgCMfRzrnljnW/Y69odcly8SHPiDyI9omzOe7r7UIuGVZGD9lbW3IqScYI8jznQpjz4vTrR1MTBMzIPevVFa1QfTJz+yOo95IleOO+lJ1jVby1qcKpfzGAPdnrPTRbw1WEKcoT0zzHxHT3ynTzFyk44lz4ZGfhPR/pMetENs6RbUGKnvU5HvGCPYQZy2ur5vfqKD0SxuH9h/TrPwbHul73X15dDWxyUxg+K93w/CR2+O7dlzrqNOAbQvA6E8IsQHIwegYHOM+MowV6WRxRLyiCbofYZd9wCfydpM/wB3gfshiF+zE59srY2r1eUSs1oHat7HZcIUPC4VQcsw+E61oNItNVdSclrRUX2KAB909SEZ8r40e8REmUCIiAIiIAiIgCIiAIiIAiIgCZExGYOlT3J/8MT436s//PZN3eI/2ezH+H4cQlc3U3l0tVBVrl4jdqWCqGduFrnZTwqCRkHMsGn2nptYr113I5IIKg4ceZU8xPFyTSyumuNm320cq3zJ7Osdxfn8Dj+s3/ky3rr2XbcNQjFLUT0kAZgULEDBIyDxH4Tf2/sYlWqsBHerd2R0YHvlLq2Lfe54eFlX0e0yFr5eDHqfIZM9WK90S1Nw4rwWPR7Z+ebS1OoVSq2srBfDhKImcd5Az7zOumch2PsNtPzGpAYlSeCrj5rzADWEcs+U0N6dbq1tV2vtsTlwlwvDnvDVqOD7Jn6jC8rT2JS3qTtgOZWN8j6VR7uF/vGZyZ9s6i5lVDwtnI7JeBs+1eePslzYX2V1i3VuzKuCGprdckDIBBViOXfmV4+l7LTTFppclYv2p84sKk2CkfRrUln82I6CTGhq0xHCtaqfB6yrH+IZM2Kqbahha67EH9zlH/lP19xM9tLqFtGUOeeCMHIPgV6g+U1si3vwT26XK/A6dm32FZcZXdh6UadHvvZawR1cheFevMnoT4eU9f8Ai/R/3p4fr9lb2f8AM4eH7Z5edPJbcrYXCPbcf1NYPDXav7WB/rLJKt8n2qSyvVlGDf23UtkHIw5DIQe8FSDLTPYj7UZMn3MRESRAREQBERAEREAREQBERAEREASA1GmbX6ttJxMumoVH1PCSGsaznXRxD1VwCzY5kYHfJ+R25FgXU7VVuTfOarP/AG3orCH2ZVh7jOyuTlNqW0WjZ+zaaFCU1JWo7kUKPskdvFutp9YAXXgtXml9fo2ofFXHX2HkZKrq1Pf9k95bw0ZN1L2cS3p1eqUrs/UgZ5u9y8lvoGApUdULNyYd2DjrNE2qCqZAPCeFRywowOQ7hLP8rmjK6nTX/QsqfTlu5XDcdeT3Z9Ie6UzTvwlQT6KqVOQSxORg8UyPGoepPVx33wmzfny6ggggEHqDzE8W1Q7smfNFN2otXT0j8638NSd9jn7h3mcSJmvsWqsK5RVB7S0cgOgY4HwxJKe28G5T7LUWJY9tDfpGKjiqbotmF6r3H3SPTVdM8wejDmCPGdaaOdyrlHvdaqgsxAAxzPwnw+vOmtXVKMkYWwDrZUSAc+LLkEHr3dJ56jUZU8JAPLGVyOvhNc6ZrnFaZL6iyutVyT3jiYDuUKCT7Jzt3wzu9cnUtgbqNey6raChm9arTH0qqB9EsOj2+JPIdBLsEGMYGOmO74RWuAB4AD4RY4UZM1zExOl4PIu6t7ZTt7d3BWG12jQV6iocbqg4V1Fa83qdRyJIzhuoOJtaDVrdVXahytiK6+xgCPvk5qNcgSxm5KqOzE9OEAk/ZKduOhGg0mRjNSsB4K2WUfwkSFa8o0Ym9aZORESJMREQBERAEREAREQBERAEREASs7zXHS3U6ur0rXK6dtOM8WpRjkBcfTTmwPTGcyzSK3Y04v2hrL35/NeDTUg/RLIttzjwJ41X2LOpbYbSTbN7SbZps73rboa7q3qcHwwww3tBIMsekfKj8CPvntEsmEjJV9xqbV2bVqanpuQPW4wVPxBHgQeYM5zrvkvuU/mNWrJ3LfXxso8ONSC3vnTrX4QTNM6wrzcqo/xEL95nLUvhk8V3P2nO9J8mN5P53VBR3imoIT++xJHwl53c3ao0ScNKAZOSeZZj9ZmPNjNw7Y0/6xT/ADU/GPyzpv1ij+an4zqhIXmu1pm1fSHBVhkHl8ZQNrfJjWWLaW1qMnJQAPSSf8tvV9xEun5a036zR/NT8Y/LWm/WaP5qfjFSmcjJceDmqfJprM89RpwPHsWz8OPEuG6e5FOiY2lmuvI4Ta+Bwr3rWo5IPt85N/lSpv0dtTnysQ/cZ6UXNnDDr0MipmWTvLktcm1I/adqr6TsqIoGWY4HP7z5SQnw1SkgkAkdCe72eEspbKJens5vvPtf5w9OjCW0aW9ir321tX2/Dz+bVhhlQ/1mxkA4zmWhEAAAGAAAAO4DkBN7ebZCavTW0t9JSVbvRxzR18CGwZX92Nc1+k09r+u1a8f7Y9F/9QMqpaNeOlUknERIkhERAEREAREQBERAEREAREQBIXYV3Y6/Wadjw/O+z1NJPLiZEWu6seY4Eb2MZNTQ2xsmvUoFs4gVIZHQ8Nlbjo6MOhhBra0WCrUsvI8/I9ZtJqlPfjHM55YHmZS0badXorfpdSo6HUVtXZ72qPCf4RPDU7M1Wr9DWaisVDmdNpg1av5Wux42XyGAZJVoqeLZ9bQ27brmsGnuOn0VfFx6lcdpcV9YUMeS1jBy/f3eMqG7ewatRW2psp7UW2O1fbE2stQPCuS+Tk4JPtk18p+0BptnmqsBe1K0qq8gEHNwAOnojH70mdiaYVaeisfRqrX4KMzD1uVzKS9zd08KVtIgDu7pP1Wj+Wv4T6/IGl/VaP5SfhLSVB7p8GhfqieZ6tfLNfeis/kHS/qtH8pPwmG2BpD101H8tPwlm+br9UT6FSj6I+E76r+WO9FX/wCGdK3L5pSfZWo+0Caew6tVptVqKdNqHDoFvq09rF6LaW5NXg80YNyDKe8Zl3lJ3z1fzXXbP1Q6ZeqzzRiufgGY+6aekzV6mmyrIla1o6Zu5vFVq6i65R0PDbU36Spx1Vh9x6ETet1o+jzlR2nsMWWC+m1tPqFGBdXg8S/UtQ8rF9vuMx2+1ehfZ5/zDTdxe0px4z757Dts8v0Vvgld4dr/ADbT23sSSAVrXve1/RrrUd5LETQ3b0B0+l09Tc2StQx/xnm/+oma+l2GxtW/VXvqbV9QFQlNR8a6hyB/xEkyakC1LQiIgCIiAIiIAiIgCIiAIiIAiIgCInxZaq+syr7SB98Ajt59pnTaZ7EGbPRSsHvssYInuyc+6Vi7Zg0DaXV8TM3aFNXaxJLraOEu/dwq5UjwEl9+HA09V2QUq1OnsfHMcAfhLZHcOLPum3tHaelrRk1VlQrcYKuV558FPrcvKZM+SpuUvBfjX0lN+UzF1zL1XT6RrevLjudUU+fogmXxBgD2Cc3t01PzXaz6fjNWKUr4w4IWtFcgB/SC5c4HgJ0epsqp8QD8RMnWX3P/AL+C+FpH3PTTVcbBfH/vPOebans7KD42hT+8jjHxxMuGVVpP5FtqXol9bs9VQsueXPme7vkZNzeHaIWg472qT+OxE/3TTmnrcczS7Snp3Tn6hKnv3oRe2kqP021CDyJocg+4gS2Sv7wc9Xs4f5tzfCph/WZ8D1e/z/g0ExuprTdo9NY3rGpA37ajhb7QZKyn7ube02nFmmutWpkv1AXtMohVrGZeFz6J5N0zylurcMMqQQehBBHxE96XtbMNJpn1E83vUHBdQfAsAfgZ6TpEREQBERAEREAREQBERAEREAREQCK3l2o2noLIvHa7JVUp6Gxzhc+Q5k+Qkds7cuuwF9QBqrerWXekMnurQ8kXwAHhPvek/wBo2Zn1fnL58M9jZw/bLdpwHJZMouMHAHM//kzZt1anf6Xks7uydo5/t3cn8w7aTjpBGHpRylVy55oy/RJ5gMB3zd2DsbSKiW00KCyqQ7jiswR0LNkgjpjyls11DImAxKZ6HqPf4Zlc0Vgr4l+jxuw8uJixHxJmHO6ldjbNGF962a239DnT6sDrcGPv7IJ/sE2939R2ml07/WpqPxUT51d4fl3fjNHcVv7GlZ61PdT/AAWMF/04lD28f7LWtIsEiN5b+zSl/DVaT4Naqn7GkvK9v4caKxh1V6HH7tqN/Scwf3J/JFra0Sm+L4roX6+r0o/hs7T/AGTdkRvpZm3Zy/W1Yb+Gpz/WS809d9y/BXhX0iVvaj52jpV+pRfYfIu9aD7mlklUVuPaGqb+7r09Pv8ASsb/AJhM2L3f8FyW2WFdEhV1dVYM7sQwDD0j4GVzW7ujt6qdEbNMx9O1qXZVWvJUAVg8PGxzjly4WPdLEutGOYOY2UD2juPWZkx7AMAezJPxMniupre2cqWka2n3E0uSraat2xlnu/OOc95dskmaHZts26vgZjpbbFqetmLCl3PCj1k8wnFhSvTmDL+ulbm3GeIjHLGPhiVL5QWUaC1OH0xwc/FuNcHPfk4M3qax0m2/Pv7/AOzJOTveieiYXoJmbSoREQBERAEREAREQBERAEREAhN79A9unJqGbqnS+seLVnJX95eJffJTdTblV9KujDDekMnBB71PgQRie8q20t2bFse7RuiM5zZTYD2Lt9ccPOtj3kZB8JVcPaqfKLF21PbRbdt69FQqCCxxyBzKrNHs9oDl8zrJ8RqV4ftXP2T0TZW0bOp0lA8u0vf7lUfbMeXFly1trRpxPHinSZ47Y1zVKorUNbY4rrU8gWPPLf4QASfZPvZe66oGZ9TqGZmZ3Ndr018Z9YhKyOXLvz0nntPdbUVdlqa77dTdS/F2b8CIVKlXFagAK2DyyT0kcN5iulai5LKbxW6YsqsGTggEEDBzy+MjeDJCSn9k/UV+C46fTFQOGywjwc8f2n0vtkN8oFgGiuBOMhf+ZR95mvVvtSyg+mrED0DTaWBPcABzmdNortfbW1tT1aVHWwi0cNlzIcoOzPq1g8znriV4cGR5E2vBxtSts+t5tq0WX7N7K6uwre+QrBjzqYA8vMSytzHI4z39fhmam3t3a76Sta11WhleuxUUFbEOVzgZ4T0PkTIKveJ6PQ1VNtLDkT2bWUt5pYmRjyODLurwXTVLkhiqWtExqtlLZya7UZPP0bnr+ysgd8rus0TbPdrVse2iyxO2Fh4ra2fCLaH6svIA5n1fvnUbqscQRRYzOa7ApJHCEHLJ65/dE19Xfqdos9VFFi0WLVW19iGtQquWdlDc2ODgY85VixZd6a4LN9vJYptbN1IrcE9MjMj33X1Ff6DWsw7l1KCwezjThb754HTbRX1tNp7POu8r/psXl8ZJ9Lkl7Q9bHS0zow1acPFxrjrnIlC2/qBrNZTpU5qtiam8joK6jmtCfFnC8vBTNYaHaNvIV0acHq72G1wPFUUYJ9plh2FsWvSoVQszMeKyx+b2N9Zj9w6CbUrtp2taMnZGPfa9skoiJeVCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgHrEROnBERB0REQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQD/2Q==',
      'Cerdo': 'https://i.blogs.es/576cff/cerdo0133e1/450_1000.webp',
      'Rata': 'https://s1.abcstatics.com/abc/www/multimedia/ciencia/2023/11/02/AdobeStock_613308675-Rn7g7tfhK3n2xkkgyojWpgP-1200x840@abc.jpg',
      'Buey': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0SIEXr6hZ3s_e3F-OhUvC5hMkIy6GbJQSvA&s',
      'Tigre': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYPVP7-sA4JGhFs5vK-n-zI6p63yxGDhT70MKrNW_p9PX2S2vbcnlYoqxegWFrni4ffNc&usqp=CAU',
      'Conejo': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjQt_ovIBaldMzXB4DcRKzqeT6yHpdCI5rEQ&s',
      'Dragon': 'https://www.radiokermes.com/images/2024/JUNIO_2024/IZ2L35QVZBBM5MM24EVGXFKARA_1.jpg',
      'Serpiente': 'https://i.blogs.es/4e0ec8/rango-03/450_1000.jpg',
      'Caballo': 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/1e/Brown_Horse.png/revision/latest?cb=20190716121731',
      'Cobra': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCFv4fCV0yH5GselxezIHmREMQ5bU448VwKA&s',
    };

    if (signo in images) {
      this.zodiacImage = images[signo as keyof typeof images];
    } else {
      this.zodiacImage = '';
    }
  }
}
