import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DevisService } from 'src/app/services/devis.service';
import { FacteurService } from 'src/app/services/facteur.service';
import { UserService } from 'src/app/services/user.service';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-dashbored-financial',
  templateUrl: './dashbored-financial.component.html',
  styleUrls: ['./dashbored-financial.component.css'],
})
export class DashboredFinancialComponent implements OnInit {
  devisTab: any = [];
  facturesTab: any = [];
  usersTab: any = [];

  constructor(
    private dService: DevisService,
    private fService: FacteurService,
    private uService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dService.getAllDevis().subscribe((data) => {
      console.log('Here data from service ', data.deviss);
      this.devisTab = data.deviss;
    });
    this.fService.getAllFactures().subscribe((data) => {
      console.log('Here data from service ', data.facture);
      this.facturesTab = data.facture;
    });
    this.uService.getAllUsers().subscribe((data) => {
      console.log('Here data from service ', data.users);
      this.usersTab = data.users;
    });
  }
  isUserAllowed(role: string): boolean {
    return ['apprenant'].includes(role);
  }
  deleteDevis(id: string) {
    this.dService.deleteDevis(id).subscribe((response) => {
      console.log('Here response after delete', response.msg);
      this.dService.getAllDevis().subscribe((data) => {
        this.devisTab = data.deviss;
      });
    });
  }
  deleteFacture(id: string) {
    this.fService.deleteFactures(id).subscribe((response) => {
      console.log('Here response after delete', response.msg);
      this.fService.getAllFactures().subscribe((data) => {
        this.facturesTab = data.facture;
      });
    });
  }
  Valider(id: string) {
    // Obtenir les données de l'utilisateur par son identifiant
    this.uService.getUserById(id).subscribe((userData) => {
      // Vérifier si les données utilisateur existent
      if (userData && userData.user) {
        // Mettre à jour le statut de l'utilisateur
        const newStatus =
          userData.user.payement === 'non payé' ? 'payé' : 'non payé';

        // Créer un objet avec l'identifiant de l'utilisateur et le nouveau statut
        const updatedUserData = {
          _id: id,
          payement: newStatus,
        };

        // Appeler la fonction editUser du service pour mettre à jour l'utilisateur
        this.uService.editUser(updatedUserData).subscribe((response) => {
          console.log('Payement mis à jour avec succès :', response);

          // Actualiser la liste des utilisateurs après la mise à jour du statut
          this.uService.getAllUsers().subscribe((data) => {
            this.usersTab = data.users;
          });
        });
      } else {
        console.log(
          'Erreur : Impossible de récupérer les données utilisateur.'
        );
      }
    });
  }
  info(id: string) {
    this.router.navigate([`info-devis/${id}`]);
  }
  infoo(id: string) {
    this.router.navigate([`info-facture/${id}`]);
  }
  editFacture(id: string) {
    this.router.navigate([`edit-facture/${id}`]);
  }
  editDevis(id: string) {
    this.router.navigate([`edit-devis/${id}`]);
  }

  // generateDevisPDF(devis: any) {
  //   const doc = new jsPDF();
  //   doc.setFontSize(18);
  //   doc.text('Devis', 10, 10);
  //   doc.setFontSize(12);
  //   autoTable(doc, {
  //     startY: 20,
  //     head: [['Client', 'Description', 'Prix', 'Quantité', 'Validité']],
  //     body: [
  //       [
  //         devis.clientName,
  //         devis.productDescription,
  //         devis.price,
  //         devis.quantity,
  //         devis.validityDate,
  //       ],
  //     ],
  //   });
  //   doc.save('devis.pdf');
  // }

  // generateFacturePDF(facture: any) {
  //   const doc = new jsPDF();
  //   doc.setFontSize(18);
  //   doc.text('Facture', 10, 10);
  //   doc.setFontSize(12);
  //   autoTable(doc, {
  //     startY: 20,
  //     head: [['Client', 'Date', 'Description', 'Prix', 'Méthode de paiement']],
  //     body: [
  //       [
  //         facture.clientName,
  //         facture.date,
  //         facture.serviceDescription,
  //         facture.totalPrice,
  //         facture.methodOfPayment,
  //       ],
  //     ],
  //   });
  //   doc.save('facture.pdf');
  // }
  // generateDevisPDF(devis: any) {
  //   const doc = new jspdf.jsPDF();

  //   // En-tête du devis
  //   doc.setFontSize(18);
  //   doc.text('Devis', 105, 15, { align: 'center' });

  //   // Informations du devis
  //   const columns = ['Client', 'Description', 'Prix', 'Quantité', 'Validité'];
  //   const data = [
  //     [
  //       devis.clientName,
  //       devis.productDescription,
  //       devis.price,
  //       devis.quantity,
  //       devis.validityDate,
  //     ],
  //   ];

  //   doc.autoTable({
  //     startY: 25,
  //     head: [columns],
  //     body: data,
  //   });

  //   // Pied de page
  //   const pageCount = doc.getNumberOfPages();
  //   for (let i = 1; i <= pageCount; i++) {
  //     doc.setPage(i);
  //     doc.text(
  //       10,
  //       doc.internal.pageSize.height - 10,
  //       `Page ${i} sur ${pageCount}`
  //     );
  //   }

  //   doc.save('devis.pdf');
  // }

  // generateFacturePDF(facture: any) {
  //   const doc = new jspdf.jsPDF();

  //   // En-tête de la facture
  //   doc.setFontSize(18);
  //   doc.text('Facture', 105, 15, { align: 'center' });

  //   // Informations de la facture
  //   const columns = [
  //     'Client',
  //     'Date',
  //     'Description',
  //     'Prix',
  //     'Méthode de paiement',
  //   ];
  //   const data = [
  //     [
  //       facture.clientName,
  //       facture.date,
  //       facture.serviceDescription,
  //       facture.totalPrice,
  //       facture.methodOfPayment,
  //     ],
  //   ];

  //   doc.autoTable({
  //     startY: 25,
  //     head: [columns],
  //     body: data,
  //   });

  //   // Pied de page
  //   const pageCount = doc.getNumberOfPages();
  //   for (let i = 1; i <= pageCount; i++) {
  //     doc.setPage(i);
  //     doc.text(
  //       10,
  //       doc.internal.pageSize.height - 10,
  //       `Page ${i} sur ${pageCount}`
  //     );
  //   }

  //   doc.save('facture.pdf');
  // }

  generateDevisPDF(devis: any) {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Devis', 10, 10);
    doc.setFontSize(12);
    (doc as any).autoTable({
      startY: 20,
      head: [['Client', 'Description', 'Prix', 'Quantité', 'Validité']],
      body: [
        [
          devis.clientName,
          devis.productDescription,
          devis.price,
          devis.quantity,
          devis.validityDate,
        ],
      ],
    });
    doc.save('devis.pdf');
  }

  generateFacturePDF(facture: any) {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Facture', 10, 10);
    doc.setFontSize(12);
    (doc as any).autoTable({
      startY: 20,
      head: [['Client', 'Date', 'Description', 'Prix', 'Méthode de paiement']],
      body: [
        [
          facture.clientName,
          facture.date,
          facture.serviceDescription,
          facture.totalPrice,
          facture.methodOfPayment,
        ],
      ],
    });
    doc.save('facture.pdf');
  }
}
