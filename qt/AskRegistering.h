#ifndef ASKREGISTERING_H
#define ASKREGISTERING_H

#include <QDialog>


namespace Ui {
class AskRegistering;
}

typedef enum tagASKREGISTERINGANSWER
{
        ARA_ONE                 = 1,
        ARA_ALL                 = 2,
        ARA_CONTINUE    = 3
}ASKREGISTERINGANSWER;

class AskRegistering : public QDialog
{
    Q_OBJECT

public:
    explicit AskRegistering(QWidget *parent = 0);
    ~AskRegistering();
    ASKREGISTERINGANSWER GetAction()
    {
        return m_Result;
    };

protected slots:
    void onRegisterAll();
    void onRegisterOne();
    void onRegisterNone();

protected:
    ASKREGISTERINGANSWER m_Result;

private:
    Ui::AskRegistering *ui;
};

#endif // ASKREGISTERING_H
