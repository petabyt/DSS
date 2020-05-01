#ifndef ALIGNMENTPARAMETERS_H
#define ALIGNMENTPARAMETERS_H

#include <QDialog>

namespace Ui {
class AlignmentParameters;
}

class AlignmentParameters : public QDialog
{
    Q_OBJECT

public:
    explicit AlignmentParameters(QWidget *parent = 0);
    ~AlignmentParameters();

    void SetAlignment(uint16_t wAlignment)
    {
        m_Alignment = wAlignment;
        updateText();
    };

    uint16_t GetAlignment()
    {
        return m_Alignment;
    };

signals:
    void alignmentChanged();

private slots:
    void onAutomaticClicked();
    void onBilinearClicked();
    void onBisquaredClicked();
    void onBicubicClicked();
    void onNoAlignemtnClicked();
    void updateText();

private:
    uint16_t m_Alignment;
    bool m_bFirstActivation;
    Ui::AlignmentParameters *ui;
};

#endif // ALIGNMENTPARAMETERS_H
