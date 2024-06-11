import { Component, OnInit } from '@angular/core';
import { DemandeService } from 'src/app/services/demande.service';
import { Chart } from 'chart.js/auto';

interface Demande {
  sexe: string;
  firstName: string;
  lastName: string;
  function: string;
  adress: string;
  dateOfBirth: string;
  titleFormation: string;
  duration: string;
  priceEstimation: string;
  userID: string;
}

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css'],
})
export class StatistiqueComponent implements OnInit {
  demandeTab: Demande[] = [];
  currentChart: Chart | null = null;

  constructor(private demandeService: DemandeService) {}

  ngOnInit(): void {
    this.demandeService.getAllDemandes().subscribe((data) => {
      console.log('Here data from service ', data.demandes);
      this.demandeTab = data.demandes;
      this.generateSexeBarChart(); // Default chart
    });
  }

  generateSexeBarChart(): void {
    const sexeCounts = this.demandeTab.reduce<{ [key: string]: number }>(
      (acc, demande) => {
        const sexe = demande.sexe.toLowerCase();
        if (sexe === 'homme' || sexe === 'femme') {
          acc[sexe] = (acc[sexe] || 0) + 1;
        } else {
          console.warn(`Valeur de sexe inattendue : ${demande.sexe}`);
        }
        return acc;
      },
      { homme: 0, femme: 0 } // Initialisation des valeurs
    );

    const labels = ['Hommes', 'Femmes'];
    const data = [sexeCounts['homme'], sexeCounts['femme']];

    this.updateChart(
      'bar',
      labels,
      data,
      [
        'rgba(54, 162, 235, 0.2)', // Bleu pour homme
        'rgba(255, 99, 132, 0.2)', // Rose pour femme
      ],
      ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)']
    );
  }

  generateFormationPieChart(): void {
    const formationCounts = this.demandeTab.reduce<{ [key: string]: number }>(
      (acc, demande) => {
        acc[demande.titleFormation] = (acc[demande.titleFormation] || 0) + 1;
        return acc;
      },
      {}
    );

    const labels = Object.keys(formationCounts);
    const data = Object.values(formationCounts);

    this.updateChart(
      'pie',
      labels,
      data,
      [
        'rgba(54, 162, 235, 0.2)', // Bleu pour les formations
        'rgba(255, 99, 132, 0.2)', // Rose pour les autres
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      [
        'rgba(54, 162, 235, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ]
    );
  }

  updateChart(
    type: string,
    labels: string[],
    data: number[],
    backgroundColor: string[],
    borderColor: string[]
  ): void {
    const ctx = (
      document.getElementById('myChart') as HTMLCanvasElement
    ).getContext('2d');
    if (this.currentChart) {
      this.currentChart.destroy();
    }
    if (ctx) {
      this.currentChart = new Chart(ctx, {
        type: type as any,
        data: {
          labels: labels,
          datasets: [
            {
              data: data,
              backgroundColor: backgroundColor,
              borderColor: borderColor,
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top',
            },
            tooltip: {
              callbacks: {
                label: function (context: any) {
                  const label = context.label || '';
                  const value = context.raw || 0;
                  return `${label}: ${value}`;
                },
              },
            },
          },
        },
      });
    }
  }
}
